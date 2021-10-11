const express = require('express');
const OptProductTitle = require('../../models/OptProductTitle');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query} = req.query;

  try {
    const optProductTitle = await OptProductTitle.find({...query});
    if(optProductTitle) return res.status(200).json({success: true, message: "Successful!", optProductTitle});
    else return res.status(400).json({success: false, message: "Not exists"});  

  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

router.post('/', verifyToken, async (req, res) => {
  const {optProductTitles} = req.body;
  const result = {
    success: true,
    message: 'Successful!'
  }
  
  try {
    await optProductTitles.forEach(async (item, index) => {
    const {title, product_id, datatype} = item;
    req.body.cre_uid = req.uid;
  
    if(!title) {
      result.success = false;
      result.message = "Title index "+index+" is required";
      return;
    }
    if(!product_id) {
      result.success = false;
      result.message = "Category index "+index+"  is required";
      return;
    } 
    if(datatype === undefined) {
      result.success = false;
      result.message = "Datatype index "+index+"  is required";
      return;
    }
    
      const optProductTitle = await OptProductTitle.findOne({title, product_id});
      if(!optProductTitle) {
        const newOptProductTitle = new OptProductTitle(item);
        await newOptProductTitle.save();
      }
    });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  
  return res.status(result.success ? 200 : 400).json({...result});
});

router.put('/', verifyToken, async (req, res) => {
  const {optProductTitles, product_id} = req.body;
  const result = {
    success: true,
    message: "Successful!"
  }

  try {
    await optProductTitles.forEach(async (item, index) => {
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

      const optProductTitle = await OptProductTitle.findOne({title, product_id, datatype});
      if(!optProductTitle) {
        if(item._id) delete item._id;
        const newOptProductTitle = new OptProductTitle(item);
        await newOptProductTitle.save();
      }

    });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  return res.status(result.success ? 200 : 400).json({...result});
});

module.exports = router;