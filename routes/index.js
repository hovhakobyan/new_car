var express = require('express');
var router = express.Router();
let app = express();
let port = 3000;

console.log('index.js run');


/* GET home page. */
router.get('/add', function(req, res, next) {

    console.log('+++++++++++++++++++++++++++++++++++++');
    console.log(req);
    console.log(res);
    console.log('======================================');

    res.render('index', { title: 'Express' });
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});

module.exports = router;
