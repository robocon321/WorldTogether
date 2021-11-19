const express = require('express');
const OptProductTitle = require('../../models/OptProductTitle');
const OptProductValue = require('../../models/OptProductValue');
const router = express.Router();

router.get('/', async (req, res) => {
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
      if(index === optProductTitle.length - 1)
      return res.status(200).json({success: true, message: "Successful!", product_titles: optProduct.product_titles, product_values: optProduct.product_values});
    });


  } catch (e) {
    console.log("Get error -", e);
    return res.status(500).json({success: false, message: "Interval Server"})
  } 
})

module.exports = router;