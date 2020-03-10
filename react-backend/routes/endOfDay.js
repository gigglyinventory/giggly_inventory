var express = require('express');
var router = express.Router();
var endOfDayController = require('../controllers/endOfDay');
const isAuth = require('../middleware/is-auth');

router.post('/update-grills', isAuth, endOfDayController.postUpdateGrills);
router.post('/update-feet', isAuth, endOfDayController.postUpdateFeet);
router.post('/update-skins', isAuth, endOfDayController.postUpdateSkins);
router.post('/update-materials', isAuth, endOfDayController.postUpdateMaterials);

module.exports = router;