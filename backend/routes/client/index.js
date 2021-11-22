const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const optProductRoute = require('./optProduct');
const categoryRoute = require('./category');

router.use('/product/', productRoute);
router.use('/option-product/', optProductRoute);
router.use('/category/', categoryRoute);

module.exports = router;