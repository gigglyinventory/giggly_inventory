var express = require('express');
var router = express.Router();
var endOfDayController = require('../controllers/endOfDay');

router.post('/add-product', endOfDayController.postAddProduct);
router.post('/add-material', endOfDayController.postAddMaterial);

module.exports = router;