var express = require('express');
var router = express.Router();
var endOfDayController = require('../controllers/endOfDay');

router.post('/update-summary', endOfDayController.postUpdateSummary);

module.exports = router;