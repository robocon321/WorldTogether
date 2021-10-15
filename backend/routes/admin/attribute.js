const express = require('express');
const Attribute = require('../../models/Attribute');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query} = req;

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
  const result = {
    success: true,
    message: 'Successful!'
  }
  
  try {
    await attributes.forEach(async (item, index) => {
    const {title, category_id, datatype} = item;
    req.body.cre_uid = req.uid;
  
    if(!title) {
      result.success = false;
      result.message = "Title index "+index+" is required";
      return;
    }
    if(!category_id) {
      result.success = false;
      result.message = "Category index "+index+"  is required";
      return;
    } 
    if(datatype === undefined) {
      result.success = false;
      result.message = "Datatype index "+index+"  is required";
      return;
    }
    
      const attribute = await Attribute.findOne({title, category_id});
      if(!attribute) {
        const newAttribute = new Attribute(item);
        await newAttribute.save();
      }
    });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
return res.status(result.success ? 200 : 400).json({...result});
});

router.put('/', verifyToken, async (req, res) => {
  const {attributes, category_id} = req.body;
  const result = {
    success: true,
    message: "Successful!"
  }

  try {
    await attributes.forEach(async (item, index) => {
    const {title, datatype} = item;
    req.body.cre_uid = req.uid;
  
    if(!title) {
      result.success = false;
      result.message = "Title index "+index+" is required";
      return ;
    }
    if(datatype === undefined) {
      result.success = false;
      result.message = "Datatype index "+index+" is required";
      return ;
    }
      const attribute = await Attribute.findOne({title, category_id, datatype});
      if(!attribute) {
        if(item._id) delete item._id;
        const newAttribute = new Attribute(item);
        await newAttribute.save();
      }
  });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  return res.status(result.success ? 200 : 400).json({...result});
});

module.exports = router;