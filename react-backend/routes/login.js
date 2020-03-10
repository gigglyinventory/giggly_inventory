const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/get-login', authController.getLogin);
router.get('/get-signup', authController.getSignup);
router.post('/post-login', authController.postLogin);
router.post('/post-signup', authController.postSignup);
router.post('/post-logout', authController.postLogout);

module.exports = router;