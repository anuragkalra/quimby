var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var json = [
        {
            "Title" : "Nectar in a Sieve",
            "Author": "Kamala Markandaya"
        },
        {
            "Title": "Intro to Algorithms",
            "Author": "CLRS"
        }
    ];
    res.send(json);
});

router.get('/ps', function(req, res, next) {
    //Incomplete. Need to link up Postgres
    var json = [
        {
            "Title" : "Nectar in a Sieve",
            "Author": "Kamala Markandaya"
        },
        {
            "Title": "Intro to Algorithms",
            "Author": "CLRS"
        }
    ];
    res.send(json);
});

module.exports = router;