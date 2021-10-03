const express = require('express');
const router = express.Router();
const accountRoute = require('./account');
const categoryRoute = require('./category');
const attributeRoute = require('./attribute');

router.use('/account/', accountRoute);
router.use('/category/', categoryRoute);
router.use('/attribute/', attributeRoute);

module.exports = router;