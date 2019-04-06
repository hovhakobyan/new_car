var express = require('express');
var router = express.Router();


console.log('index.js run');


/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('+++++++++++++++++++++++++++++++++++++');
    console.log(req);
    console.log(res);
    console.log('======================================');

    res.render('index', { title: 'Express' });
});

module.exports = router;
