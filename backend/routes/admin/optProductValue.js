const express = require('express');
const OptProductValue = require('../../models/OptProductValue');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query} = req.query;

  try {
    const optProductValue = await OptProductValue.find({...query});
    if(optProductValue) return res.status(200).json({success: true, message: "Successful!", optProductValue});
    else return res.status(400).json({success: false, message: "Not exists"});  

  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

router.post('/', verifyToken, async (req, res) => {
  const {listOptProductValues} = req.body;
  const result = {
    success: true,
    message: 'Successful!'
  }
  
  try {
    await listOptProductValues.forEach((optProductValues, index) => {
      let code = new Date().getTime();
      optProductValues.forEach(async (child, i) => {
        const { opt_title_id, text_value, number_value, date_value, opt_real_price, opt_sale_price, avatar } = child;

        req.body.code = code;
        req.body.cre_uid = req.uid;
      
        if(!opt_title_id) {
          result.success = false;
          result.message = "Option title list index "+index + " child index " + i + " is required";
          return;
        }
  
        if(!text_value && !number_value && !date_value) {
          result.success = false;
          result.message = "Value  list index "+index + " child index " + i + "  is required";
          return;
        } 
  
        if(!opt_real_price) {
          result.success = false;
          result.message = "Option real price list index "+index + " child index " + i + " is required";
          return;
        }
  
        if(!opt_sale_price) {
          result.success = false;
          result.message = "Option sale price list index "+index + " child index " + i + " is required";
          return;
        }
  
        if(!avatar) {
          result.success = false;
          result.message = "Avatar list index "+index + " child index " + i + " is required";
          return;
        }
  
        const optProductValue = await OptProductValue.findOne({opt_title_id, text_value, number_value, date_value});
        if(!optProductValue) {
          const newOptProductValue = new OptProductValue(child);
          await newOptProductValue.save();
        }  
      });
    });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  
  return res.status(result.success ? 200 : 400).json({...result});
});

module.exports = router;