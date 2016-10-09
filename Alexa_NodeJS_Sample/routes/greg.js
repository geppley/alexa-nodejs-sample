var express = require('express');
var router = express.Router();

/* GET greg*/
router.get('/', function (req, res) {
    res.render('greg', { title: "Hello World", name: 'Greg' });
    //res.send('respond with a resource');
   //res.end("Hi, its greg");
});

module.exports = router;