var express = require('express');
var router = express.Router();
var inventoryController = require('../controllers/inventory');

router.get('/get-inventory', inventoryController.getInventory);

module.exports = router;