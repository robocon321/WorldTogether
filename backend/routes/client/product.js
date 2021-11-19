const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get('/', async (req, res) => {
    const { query } = req;
    const {skip, limit, sort, search} = query;
    
    delete query.skip;
    delete query.limit;
    delete query.search;

    try {
      const count = await Product.find({...query, title: { $regex: new RegExp(search, 'i')}}).count();
      const product = await Product.find({...query, title: { $regex: new RegExp(search, 'i')}})
                                    .skip(skip && parseInt(skip))
                                    .limit(limit && parseInt(limit))
                                    .sort(sort)
                                    .populate('category_id', ['title'])
                                    .populate('shop_id', ['title']);

      if(product) return res.status(200).json({success: true, message: "Successful!", product, count});
      else return res.status(400).json({success: false, message: "Not exists"});  
    } catch (e) {
      console.log(e);
      return res.status(500).json({success: false, message: "Interval server"});
    }
});

module.exports = router;