var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

//router.get('/add-user', adminController.getAddUser);
router.post('/add-user', adminController.postAddUser);
router.post('/add-product', adminController.postAddProduct);
router.post('/delete-user', adminController.postDeleteUser);
router.post('/discontinue-product', adminController.postDiscontinueProductByID);

module.exports = router;