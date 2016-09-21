'use strict';

var express = require('express');

var router = express.Router();
router.baseRoute = '/';

router.get('/', function (req, res) {
	res.send('<h1>Hello world!</h1>');
});

module.exports = router;
