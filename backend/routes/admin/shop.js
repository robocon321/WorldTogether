const express = require("express");
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const Shop = require("../../models/Shop");

router.get('/', verifyToken, async (req, res) => {
    const { query } = req;
    const {skip, limit, sort, search} = query;
    
    delete query.skip;
    delete query.limit;
    delete query.search;

    try {
      const count = await Shop.find({...query, title: { $regex: new RegExp(search, 'i')}}).count();
      const shop = await Shop.find({...query, title: { $regex: new RegExp(search, 'i')}}).skip(skip && parseInt(skip)).limit(limit && parseInt(limit)).sort(sort);
      if(shop) return res.status(200).json({success: true, message: "Successful!", shop, count});
      else return res.status(400).json({success: false, message: "Not exists"});  
    } catch (e) {
      console.log(e);
      return res.status(500).json({success: false, message: "Interval server"});
    }
})

router.post('/', verifyToken, async (req, res) => {
  const { title, descrp, avatar, meta_keyword, meta_descrp, meta_title, slug } = req.body;
  req.body.cre_uid = req.uid;
  
  if(!title) return res.status(400).json({success: false, message: "Title is required"});
  if(!descrp) return res.status(400).json({success: false, message: "Descrp is required"});
  if(!avatar) return res.status(400).json({success: false, message: "Avatar is required"});
  if(!meta_keyword) return res.status(400).json({success: false, message: "Meta_keyword is required"});
  if(!meta_descrp) return res.status(400).json({success: false, message: "Meta_descrp is required"});
  if(!meta_title) return res.status(400).json({success: false, message: "Meta_title is required"});
  if(!slug) return res.status(400).json({success: false, message: "Slug is required"});

  try {
    const shop = await Shop.findOne({slug, is_delete: false});
    if(shop) return res.status(400).json({success: false, message: "Exists slug"});
    
    const newShop = new Shop(req.body);
    newShop.save();
    return res.status(200).json({success: true, message: "Successful!", newShop});
  } catch (e) {
    res.status(500).json({success: false, message: "Internal server error"})
  }
});

router.put('/', verifyToken, async (req, res) => {
  const { _id, title, descrp, avatar, meta_keyword, meta_descrp, meta_title, slug } = req.body;
  req.body.cre_uid = req.uid;
  
  if(!title) return res.status(400).json({success: false, message: "Title is required"});
  if(!descrp) return res.status(400).json({success: false, message: "Descrp is required"});
  if(!avatar) return res.status(400).json({success: false, message: "Avatar is required"});
  if(!meta_keyword) return res.status(400).json({success: false, message: "Meta_keyword is required"});
  if(!meta_descrp) return res.status(400).json({success: false, message: "Meta_descrp is required"});
  if(!meta_title) return res.status(400).json({success: false, message: "Meta_title is required"});
  if(!slug) return res.status(400).json({success: false, message: "Slug is required"});

  try {
    const shop = await Shop.findOne({$and: [
      {$or: [{slug}]}, 
      {is_delete: false}, 
      {_id: {$not: {$eq: _id}}}
    ]});
    if(shop) return res.status(400).json({success: false, message: "Exists slug"});
    
    await Shop.findOneAndUpdate({_id}, req.body);
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    console.log(e);
    res.status(500).json({success: false, message: "Internal server error"})
  }
})

module.exports = router;