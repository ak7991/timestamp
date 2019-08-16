const dateToJSON = require('../js/string_conversion').dateToJSON;

var express = require('express');
var router = express.Router();

router.get('/:date', (req, res, next) => {
	const dateInput = req.params.date;

	// Respond with a JSON parseable string with date values.
	res.send(dateToJSON(dateInput));
	res.end();
});

router.get('/', (req, res, next) => {

	// Respond with a JSON parseable string with date values.
	res.send({"error": "Please input date"});
	res.end();
});

module.exports = router;