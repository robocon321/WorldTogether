const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

router.get('/', async (req, res) => {
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

module.exports = router;