const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();
const Category = require("../../models/Category");

router.get('/', verifyToken, async (req, res) => {
  const { query } = req;
  let { search} = query;

  delete query.search;

  try {
    const count = await Category.find({...query, title: { $regex: new RegExp(search, 'i')}}).count();
    const category = await Category.find({...query, title: { $regex: new RegExp(search, 'i')}});
    if(category) return res.status(200).json({success: true, message: "Successful!", category, count});
    else return res.status(400).json({success: false, message: "Not exists"});  

  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
});

router.post('/', verifyToken, async (req,res) => {
  const {title, display_order, meta_keyword, meta_descrp, meta_title, slug, icon} = req.body;
  req.body.cre_uid = req.uid;

  if(!title) return res.status(400).json({success: false, message: "Title is required"});
  if(!display_order) return res.status(400).json({success: false, message: "Display order is required"});
  if(!meta_keyword) return res.status(400).json({success: false, message: "Meta keyword is required"});
  if(!meta_descrp) return res.status(400).json({success: false, message: "Meta description is required"});
  if(!meta_title) return res.status(400).json({success: false, message: "Meta title is required"});
  if(!slug) return res.status(400).json({success: false, message: "Slug is required"});
  if(!icon) return res.status(400).json({success: false, message: "Icon is required"});
  
  try {
    const category = await Category.findOne({$and: [
      {$or: [{title}, {slug}]}, 
      {is_delete: false}
    ]});
    if(category) return res.status(400).json({success: false, message: "Exists your title or slug"});
    const newCategory = new Category(req.body);
    await newCategory.save();
    return res.status(200).json({success: true, message: "Successful!", newCategory});
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }
});

router.put('/', verifyToken, async (req, res) => {
  const {_id, title, slug} = req.body;
  req.body.mod_uid = req.uid;
  req.body.mod_uid = req.uid;
  req.body.mod_time = new Date().getTime();

  try {
    const category = await Category.find({$and: [
      {$or: [{title}, {slug}]}, 
      {is_delete: false}, 
      {_id: {$not: {$eq: _id}}}
    ]});
    
    if(category == true) return res.status(400).json({success: false, message: "Exists your title or slug"});
    const newCategory = await Category.findOneAndUpdate({_id}, req.body);
    if(newCategory) return res.status(200).json({success: true, message: "Successful!"});
    return res.status(400).json({success: false, message: "Unsuccessful!"});
  } catch (e) {
    console.log("Update error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }

})

router.delete('/', verifyToken, async (req, res) => {
  const {id} = req.query;

  try {
    await Category.findOneAndUpdate({_id: id}, {is_delete: true, mod_uid: req.uid, mod_time: new Date().getTime()})
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    console.log(e);
    return res.status(500).json({success: false, message: 'Interval Server'});
  }

})

module.exports = router;