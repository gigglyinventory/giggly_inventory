var express = require('express');
var router = express.Router();
const db = require('../util/database')

/* POST login listing. */
router.post('/', function(req, res, next) {
    // console.log('in login\'s post for req', req.body.username);
    // res.setHeader('Content-Type', 'text/html');
     let username = req.body.username
     let password = req.body.password
    // let responseString = `<h1>Hello</h1> <h2>${username} ${password}</h2>`
    // res.send(responseString);
    res.send(db.query('INSERT into users values (?, ?, "Fahad", "Alhenashil", "fahad@alhenashil.test", "2020-01-03")', [username, password]))
});

module.exports = router;
