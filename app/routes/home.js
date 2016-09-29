'use strict';

var express = require('express');

var router = express.Router();
router.baseRoute = '/';

router.get('/', function (req, res) {
  res.render('home');
});

router.get('/video', function (req, res) {
  res.render('video');
});

module.exports = router;
