var express = require('express');
var router = express.Router();
var endOfDayController = require('../controllers/endOfDay');

router.post('/update-grills', endOfDayController.postUpdateGrills);
router.post('/update-feet', endOfDayController.postUpdateFeet);
router.post('/update-skins', endOfDayController.postUpdateSkins);
router.post('/update-materials', endOfDayController.postUpdateMaterials);

module.exports = router;