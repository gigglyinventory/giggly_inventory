var express = require('express');
var router = express.Router();
var endOfDayController = require('../controllers/endOfDay');

router.post('/update-product', endOfDayController.postUpdateProduct);
router.post('/update-material', endOfDayController.postUpdateMaterial);

module.exports = router;