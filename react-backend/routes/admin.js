var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

router.get('/add-user', adminController.getAddUser);
router.post('/add-user', adminController.postAddUser);
router.post('/delete-user', adminController.postDeleteUser);

module.exports = router;