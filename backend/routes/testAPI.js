var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send('Yooooo');
    var json = [
		{
            "name": "Anurag",
            "id": 12312312,
            "lastName": "Kalra",
            "hours": 50
		},
		{
            "id": 44222318,
			"name": "Charlie",
            "lastName": "Brown",
            "hours": 30
        },
        {
            "id": 79822224,
			"name": "Bob",
            "lastName": "Green",
            "hours": 20
		}
	];
	res.send(json);
});

module.exports = router;