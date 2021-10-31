const express = require('express');
const OptProductTitle = require('../../models/OptProductTitle');
const OptProductValue = require('../../models/OptProductValue');
const {DATATYPE} = require("../../utils/Constant");
const verifyToken = require('../../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const {query_title, query_value} = req.query;
  const optProduct = {
    product_titles: [],
    product_values: []
  };

  try {
    const optProductTitle = await OptProductTitle.find({...JSON.parse(query_title)});
    optProduct.product_titles = optProductTitle;

    await optProductTitle.forEach(async (item, index) => {
      const optProductValue = await OptProductValue.find({...JSON.parse(query_value), opt_title_id: item._id});
      optProduct.product_values.push(...optProductValue);
      if(index === optProductValue.length - 1)
      return res.status(200).json({success: true, message: "Successful!", product_titles: optProduct.product_titles, product_values: optProduct.product_values});
    });


  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

router.post('/', verifyToken, async (req, res) => {
  const {group} = req.body;

  const tempTitle = [];
  const tempValue = [];

  try {
    await group.forEach(async (arr, indexArr) => {
      const now = new Date().getTime();
      
      await arr.forEach(async (item, indexItem) => {
        const { product_title, product_value} = item;
        if(!product_title) {
          return res.status(400).json({success: false, message: "No exist product title"});
        }
  
        if(!product_value) {
          return res.status(400).json({success: false, message: "No exist product value"});
        }
  
        // check product_title
  
        if(!product_title.title) {
          return res.status(400).json({success: false, message: "Title group "+indexArr +", product index "+indexItem+" is required"});
        }
        if(!product_title.product_id) {
          return res.status(400).json({success: false, message: "Product group "+indexArr +", product index "+indexItem+"  is required"});
        } 
        if(product_title.datatype === undefined) {
          return res.status(400).json({success: false, message: "Datatype group "+indexArr +", product index "+indexItem+"  is required"});
        }
  
        // check product_value
  
        console.log(product_title, product_value, product_title.datatype == DATATYPE.NUMBER);
        if(
        (product_title.datatype == DATATYPE.TEXT && !product_value.text_value) || 
        (product_title.datatype == DATATYPE.NUMBER && !product_value.number_value) || 
        (product_title.datatype == DATATYPE.DATE && !product_value.date_value)
        ) {
          return res.status(400).json({success: false, message: "Value title index "+ indexArr + ", product index " + indexItem + "  is invalid"});
        }
  
        if(!product_value.opt_real_price) {
          return res.status(400).json({success: false, message: "Group option real price index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.opt_sale_price) {
          return res.status(400).json({success: false, message: "Group option sale price index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.quantity) {
          return res.status(400).json({success: false, message: "Group quantity index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.avatar) {
          return res.status(400).json({success: false, message: "Group avatar index "+ indexArr + ", product index " + indexItem + " is required"});
        }
        
        // save product_title and get title id

        let titleTemp = tempTitle.find(itemTemp => itemTemp.datatype == product_title.datatype && itemTemp.title == product_title.title);
        let id = titleTemp ? titleTemp.id : null;

        if(!id) {
          const optProductTitle = new OptProductTitle(product_title);
          optProductTitle.save();
          id = optProductTitle._id;
          item._id = id;
          tempTitle.push(optProductTitle);
        }
  
        // save value
  
        product_value.code = now;
        product_value.opt_title_id = id;
      
        const optProductValue = tempValue.find(itemTemp => {
          return itemTemp.opt_title_id == product_value.opt_title_id && 
          itemTemp.text_value == product_value.text_value &&
          itemTemp.number_value == product_value.number_value &&
          itemTemp.date_value == product_value.date_value
        });
        
        if(!optProductValue) {
          const newOptProductValue = new OptProductValue(product_value);
          newOptProductValue.save();
          tempValue.push(newOptProductValue);
        }

        if(indexArr === group.length - 1 && indexItem === arr.length - 1) {
          return res.status(200).json({success: true, message: "Successful!", ...{product_titles: tempTitle, product_values: tempValue}});
        } 
      });
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({success: false, message: "Interval Server"});
  }
});

router.put('/', verifyToken, async (req, res) => {
  const {group, updateProduct, oldProduct} = req.body;

  try {
    // update old option titles
    const oldOptProductTitles = await OptProductTitle.find({product_id: updateProduct._id});
    oldOptProductTitles.forEach(item => {
      item.product_id = oldProduct._id;
      item.save();
    });

    // add new option product
    const tempTitle = [];
    const tempValue = [];
  
    await group.forEach(async (arr, indexArr) => {
      const now = new Date().getTime();
      
      await arr.forEach(async (item, indexItem) => {
        const { product_title, product_value} = item;
        if(!product_title) {
          return res.status(400).json({success: false, message: "No exist product title"});
        }
  
        if(!product_value) {
          return res.status(400).json({success: false, message: "No exist product value"});
        }
  
        // check product_title
  
        if(!product_title.title) {
          return res.status(400).json({success: false, message: "Title group "+indexArr +", product index "+indexItem+" is required"});
        }
        if(!product_title.product_id) {
          return res.status(400).json({success: false, message: "Product group "+indexArr +", product index "+indexItem+"  is required"});
        } 
        if(product_title.datatype === undefined) {
          return res.status(400).json({success: false, message: "Datatype group "+indexArr +", product index "+indexItem+"  is required"});
        }
  
        // check product_value
  
        if(
        (product_title.datatype == DATATYPE.TEXT && !product_value.text_value) || 
        (product_title.datatype == DATATYPE.NUMBER && !product_value.number_value) || 
        (product_title.datatype == DATATYPE.DATE && !product_value.date_value)
        ) {
          return res.status(400).json({success: false, message: "Value title index "+ indexArr + ", product index " + indexItem + "  is invalid"});
        }
  
        if(!product_value.opt_real_price) {
          return res.status(400).json({success: false, message: "Group option real price index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.opt_sale_price) {
          return res.status(400).json({success: false, message: "Group option sale price index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.quantity) {
          return res.status(400).json({success: false, message: "Group quantity index "+ indexArr + ", product index " + indexItem + " is required"});
        }
  
        if(!product_value.avatar) {
          return res.status(400).json({success: false, message: "Group avatar index "+ indexArr + ", product index " + indexItem + " is required"});
        }
        
        // save product_title and get title id
        delete product_title._id; 
        delete product_value._id;

        let titleTemp = tempTitle.find(itemTemp => itemTemp.datatype == product_title.datatype && itemTemp.title == product_title.title);
        let id = titleTemp ? titleTemp.id : null;

        if(!id) {
          const optProductTitle = new OptProductTitle(product_title);
          optProductTitle.save();
          id = optProductTitle._id;
          item._id = id;
          tempTitle.push(optProductTitle);
        }
  
        // save value
  
        product_value.code = now;
        product_value.opt_title_id = id;
      
        const optProductValue = tempValue.find(itemTemp => {
          return itemTemp.opt_title_id == product_value.opt_title_id && 
          itemTemp.text_value == product_value.text_value &&
          itemTemp.number_value == product_value.number_value &&
          itemTemp.date_value == product_value.date_value
        });
        
        if(!optProductValue) {
          const newOptProductValue = new OptProductValue(product_value);
          newOptProductValue.save();
          tempValue.push(newOptProductValue);
        }

        if(indexArr === group.length - 1 && indexItem === arr.length - 1) {
          return res.status(200).json({success: true, message: "Successful!", ...{product_titles: tempTitle, product_values: tempValue}});
        } 
      });
    });
  } catch (e) {
    console.log("Put error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  }
});

module.exports = router;