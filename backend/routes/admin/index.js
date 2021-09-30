const express = require('express');
const router = express.Router();
const accountRoute = require('./account');
const categoryRoute = require('./category');

router.use('/account/', accountRoute);
router.use('/category/', categoryRoute);

module.exports = router;