const express = require('express');
const router = express.Router();
const accountRoute = require('./account');
const categoryRoute = require('./category');
const attributeRoute = require('./attribute');
const shopRoute = require('./shop');
const productRoute = require('./product');
const optProductTitleRoute = require('./optProductTitle');
const optProductValueRoute = require('./optProductValue');
const productAttributeValueRoute = require('./productAttributeValue');

router.use('/account/', accountRoute);
router.use('/category/', categoryRoute);
router.use('/attribute/', attributeRoute);
router.use('/shop/', shopRoute);
router.use('/product/', productRoute);
router.use('/option-product-title/', optProductTitleRoute);
router.use('/option-product-value/', optProductValueRoute);
router.use('/product-attribute-value/', productAttributeValueRoute);

module.exports = router;