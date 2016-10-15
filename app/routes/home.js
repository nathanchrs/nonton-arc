'use strict';

var express = require('express');
var knex = require('../components/knex.js');

var router = express.Router();
router.baseRoute = '/';

router.get('/', function (req, res) {
  knex.select('id', 'title', 'year', 'genre', 'synopsis').from('series')
    .then(function (series) {
      res.render('home', { series: series });
    });
});

router.get('/watch', function (req, res) {
  res.render('watch');
});

module.exports = router;
