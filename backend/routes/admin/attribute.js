const express = require('express');
const Attribute = require('../../models/Attribute');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query} = req.query;

  try {
    const attribute = await Attribute.find({...query});
    if(attribute) return res.status(200).json({success: true, message: "Successful!", attribute});
    else return res.status(400).json({success: false, message: "Not exists"});  

  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

router.post('/', verifyToken, async (req, res) => {
  const {attributes} = req.body;
  
  await attributes.forEach(async (item, index) => {
    const {title, category_id, datatype} = item;
    req.body.cre_uid = req.uid;
  
    if(!title) return res.status(400).json({success: false, message: "Title index "+index+" is required"});
    if(!category_id) return res.status(400).json({success: false, message: "Category index "+index+"  is required"});
    if(datatype === undefined) return res.status(400).json({success: false, message: "Datatype index "+index+"  is required"});
    
    try {
      const attribute = await Attribute.findOne({title, category_id});
      if(!attribute) {
        const newAttribute = new Attribute(item);
        await newAttribute.save();
      }
    } catch (e) {
      console.log("Insert error -", e);
      return res.status(500).json({success: false, message: "Interval Server"})
    }   
  });
  return res.status(200).json({success: true, message: "Successful!"});
});

router.put('/', verifyToken, async (req, res) => {
  const {attributes} = req.body;

  if(attributes.length > 0) {
    await Attribute.deleteMany({category_id: attributes[0].category_id})
  }
  
  await attributes.forEach(async (item, index) => {
    const {title, category_id, datatype} = item;
    req.body.cre_uid = req.uid;
  
    if(!title) return res.status(400).json({success: false, message: "Title index "+index+" is required"});
    if(!category_id) return res.status(400).json({success: false, message: "Category index "+index+"  is required"});
    if(datatype === undefined) return res.status(400).json({success: false, message: "Datatype index "+index+"  is required"});
    
    try {
      const attribute = await Attribute.findOne({title, category_id});
      if(!attribute) {
        const newAttribute = new Attribute(item);
        await newAttribute.save();
      }
    } catch (e) {
      console.log("Insert error -", e);
      return res.status(500).json({success: false, message: "Interval Server"})
    }   
  });
  return res.status(200).json({success: true, message: "Successful!"});
})

module.exports = router;