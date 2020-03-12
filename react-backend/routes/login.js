const express = require('express');
const authController = require('../controllers/authController');
const isAuth = require('../middleware/is-auth')
const loggedIn = require('../middleware/loggedIn')
const router = express.Router();

router.get('/get-login', authController.getLogin);
router.get('/get-signup', authController.getSignup);
router.post('/post-login', loggedIn, authController.postLogin);
router.post('/post-signup', authController.postSignup);
router.post('/post-logout', authController.postLogout);

module.exports = router;
