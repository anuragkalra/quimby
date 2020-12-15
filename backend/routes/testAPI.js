var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send('Yooooo');
    var json = [
		{
            "id": 12312312,
            "name": "Anurag",
            "lastName": "Kalra",
            "hours": 40
		},
		{
            "id": 44222318,
			"name": "Charlie",
            "lastName": "Brown",
            "hours": 35
        },
        {
            "id": 79822224,
			"name": "Bob",
            "lastName": "Green",
            "hours": 25
		}
	];
	res.send(json);
});

module.exports = router;