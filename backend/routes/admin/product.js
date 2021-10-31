const express = require("express");
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const Product = require("../../models/Product");
const Tag = require("../../models/Tag");

router.get('/', verifyToken, async (req, res) => {
    const { query } = req;
    const {skip, limit, sort, search} = query;
    
    delete query.skip;
    delete query.limit;
    delete query.search;

    try {
      const count = await Product.find({...query, title: { $regex: new RegExp(search, 'i')}}).count();
      const product = await Product.find({...query, title: { $regex: new RegExp(search, 'i')}})
                                    .skip(skip && parseInt(skip))
                                    .limit(limit && parseInt(limit))
                                    .sort(sort)
                                    .populate('category_id', ['title'])
                                    .populate('shop_id', ['title']);

      if(product) return res.status(200).json({success: true, message: "Successful!", product, count});
      else return res.status(400).json({success: false, message: "Not exists"});  
    } catch (e) {
      console.log(e);
      return res.status(500).json({success: false, message: "Interval server"});
    }
});

router.post('/', verifyToken, async (req, res) => {
  const { title, descrp, category_id, detail, include_vat, meta_keyword, meta_descrp, meta_title, slug, tags, shop_id, warrently } = req.body;
  req.body.cre_uid = req.uid;
  
  if(!title) return res.status(400).json({success: false, message: "Title is required"});
  if(!descrp) return res.status(400).json({success: false, message: "Descrp is required"});
  if(!category_id) return res.status(400).json({success: false, message: "Category is required"});
  if(!detail) return res.status(400).json({success: false, message: "Detail is required"});
  if(!meta_keyword) return res.status(400).json({success: false, message: "Meta_keyword is required"});
  if(!meta_descrp) return res.status(400).json({success: false, message: "Meta_descrp is required"});
  if(!meta_title) return res.status(400).json({success: false, message: "Meta_title is required"});
  if(!slug) return res.status(400).json({success: false, message: "Slug is required"});
  if(include_vat === undefined) return res.status(400).json({success: false, message: "Include vat is required"});
  if(!shop_id) return res.status(400).json({success: false, message: "Shop is required"});
  if(!warrently) return res.status(400).json({success: false, message: "Warrently is required"});

  try {
    const product = await Product.findOne({slug, is_delete: false});
    if(product) return res.status(400).json({success: false, message: "Exists slug"});
    
    const newProduct = new Product(req.body);
    newProduct.save();
    if(tags) {
      const arrTag = [...new Set(tags.split(','))];
      
      arrTag.forEach(async item => {
        if(item) {
          let tag = await Tag.findOne({name: item});
          if(tag) {
            tag.use_count = tag.use_count + 1;
            await Tag.findOneAndUpdate({_id: tag._id}, {use_count: tag.use_count})
          } else {
            tag = new Tag({name: item, use_count: 1});
            tag.save();
          }
        }
      })  
    }
    return res.status(200).json({success: true, message: "Successful!", newProduct});
  } catch (e) {
    console.log("Post error - ", e);
    res.status(500).json({success: false, message: "Internal server error"})
  }
});

router.put('/', verifyToken, async (req, res) => {
  const { _id,  slug, tags } = req.body;
  req.body.cre_uid = req.uid;
  
  try {
    delete req.body._id;

    const tagStr = await Product.findOne({_id}).select("tags -_id");

    const product = await Product.findOne({$and: [
      {$or: [{slug}]}, 
      {is_delete: false}, 
      {_id: {$not: {$eq: _id}}}
    ]});
    if(product) return res.status(400).json({success: false, message: "Exists slug"});

    // update tags
    if(tagStr.tags) {
      const newTags = [...new Set(tags.split(","))];
      const oldTags = [...new Set(tagStr.tags.split(","))];

      await oldTags.forEach(async item => {
        if(!newTags.includes(item)) {
          let tag = await Tag.findOne({name: item});
          tag.use_count--;
          tag.save();
          delete tag;
        }
      });

      await newTags.forEach(async item => {
        if(!oldTags.includes(item)) {
          let tag = await Tag.findOne({name: item});
          if(tag) {
            tag.use_count++;
            tag.save();
            delete tag;
          } else {
            new Tag({name: item, use_count: 1}).save();
          }
        }
      });
    }

    // update product

    // save old item
    const oldProduct = (await Product.findOne({_id})).toJSON();
    if(!oldProduct) return res.status(500).json({success: false, message: 'Interval Server'});
    oldProduct.is_delete = true;

    oldProduct.old_id = _id;
    oldProduct.mod_uid = req.uid;
    oldProduct.mod_time = new Date().getTime();
  
    delete oldProduct._id;
    const oldProductSave = await (new Product(oldProduct)).save();

    // save update item
    const updateProduct = await Product.findOneAndUpdate({_id}, req.body);
    if(updateProduct) return res.status(200).json({success: true, message: "Successful!", old: oldProductSave, update: updateProduct});
    else return res.status(400).json({success: false, message: "Unsuccessful!"});
 
  } catch (e) {
    console.log("Put error - ", e);
    res.status(500).json({success: false, message: "Internal server error"})
  }
})

router.delete('/', verifyToken, async (req, res) => {
  const {id} = req.query;
  try {
    await Product.findOneAndUpdate({_id: id}, {is_delete: true, mod_uid: req.uid, mod_time: new Date().getTime()})
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    console.log(e);
    return res.status(500).json({success: false, message: 'Interval Server'});
  }
});

module.exports = router;