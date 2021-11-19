const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const optProductRoute = require('./optProduct');

router.use('/product/', productRoute);
router.use('/option-product/', optProductRoute);

module.exports = router;