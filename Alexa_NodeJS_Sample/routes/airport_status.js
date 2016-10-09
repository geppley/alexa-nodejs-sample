var express = require('express');
var MyAppDataHelper = require('../helper/myapp_data_helper.js');
var router = express.Router();
var airports = ['SFO','RSW'];
var subject = new MyAppDataHelper();
var airport_code = 'BWI';
router.get('/', function (req, res) {
    subject.requestAirportStatus(airport_code).then(function (obj) {
        res.render('airport', {
            title: "Airport Status: "
            , airport: obj
            , airports: airports
            , template: subject.formatAirportStatus(obj)
        });
    });
});

router.get('/:airportCode', function (req, res) {
    if (airport_code != req.params.airportCode ) {
        airports.unshift(airport_code);
    }
    airport_code = req.params.airportCode;
    
    subject.requestAirportStatus(airport_code).then(function (obj) {
        console.log(subject.formatAirportStatus(obj));
        res.render('airport', {
            title: "Airport Status: "
            , airport: obj
            , airports: airports
            , delay: subject.formatAirportStatus(obj)
        });
   });
});

module.exports = router;