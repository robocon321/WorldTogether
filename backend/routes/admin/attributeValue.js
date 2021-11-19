const express = require('express');
const ProductAttributeValue = require('../../models/ProductAttributeValue');
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query} = req;

  try {
    const productAttributeValue = await ProductAttributeValue.find({...query});
    if(productAttributeValue) return res.status(200).json({success: true, message: "Successful!", productAttributeValue});
    else return res.status(400).json({success: false, message: "Not exists"});  

  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

router.post('/', verifyToken, async (req, res) => {
  const {productAttributeValues} = req.body;
  const result = {
    success: true,
    message: 'Successful!'
  }
  
  try {
    if(productAttributeValues.length === 0) return res.status(200).json({...result});
    await productAttributeValues.forEach(async (item, index) => {
    const { attr_id, product_id, text_value, number_value, date_value } = item;
    req.body.cre_uid = req.uid;
  
    if(!attr_id) {
      result.success = false;
      result.message = "Attribute index "+index+" is required";
      return;
    }
    if(!product_id) {
      result.success = false;
      result.message = "Product index "+index+"  is required";
      return;
    } 
    if(!text_value && !number_value && !date_value) {
      result.success = false;
      result.message = "Value index "+index+"  is required";
      return;
    }
    
      const productAttributeValue = await ProductAttributeValue.findOne({attr_id, product_id, text_value, number_value, date_value});
      if(!productAttributeValue) {
        const newProductAttributeValue = new ProductAttributeValue(item);
        await newProductAttributeValue.save();
        if(!result.success) {
          return res.status(400).json({...result});
        }
        if(index >= productAttributeValues.length - 1) {
          return res.status(200).json({...result});
        }
      }
    });
  } catch (e) {
    console.log("Insert error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  
});

router.put('/', verifyToken, async (req, res) => {
  const {attributeValues, updateProduct, oldProduct} = req.body;
  const result = {
    success: true,
    message: "Successful!"
  }

  try {
    const oldAttributes = await ProductAttributeValue.find({product_id: updateProduct._id});
    oldAttributes.forEach(item => {
      item.product_id = oldProduct._id;
      item.save();
    });

    await attributeValues.forEach(async (item, index) => {
    const {attr_id, text_value, number_value, date_value} = item;
    delete item._id;

    if(!attr_id) {
      result.success = false;
      result.message = "Attribute index "+index+" is required";
      return ;
    }

    if(!text_value && !number_value && !date_value) {
      result.success = false;
      result.message = "Value index "+index+"  is required";
      return;
    }

    const newAttributeValue = new ProductAttributeValue(item);
    await newAttributeValue.save();
  });
  
  } catch (e) {
    console.log("Put error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }   
  return res.status(result.success ? 200 : 400).json({...result});
});


module.exports = router;