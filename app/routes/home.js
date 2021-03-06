'use strict';

var express = require('express');
var knex = require('../components/knex.js');

var router = express.Router();
router.baseRoute = '/';

router.get('/', function (req, res) {
  var query = knex.select('id', 'title', 'year', 'genre', 'synopsis', 'posterPath').from('series');
  var searchText;

  if (req.query.search != null && typeof req.query.search === 'string' && req.query.search !== '') {
    searchText = req.query.search;
    query = query.where('title', 'like', '%' + searchText + '%');
  }

  query.then(function (series) {
    res.render('home', { series: series, searchText: searchText });
  });
});

router.get('/watch/:seriesId(\\d+)', function (req, res) {
  if (req.params.seriesId == null) {
    return res.sendStatus(404);
  }

  knex.first('id', 'title', 'year', 'genre', 'synopsis', 'posterPath').from('series').where('id', req.params.seriesId)
    .then(function (series) {
      return knex.select('id', 'title', 'releaseDate', 'description', 'videoPath').from('episodes').where('seriesId', series.id).orderBy('order', 'asc')
        .then(function (episodes) {
          // currentEpisodeIndex defaults to the first episode
          var currentEpisodeIndex = 0;
          if (req.query.ep != null && typeof req.query.ep === 'number' && req.query.ep >= 0 && req.query.ep < episodes.length) {
            currentEpisodeIndex = req.query.ep;
          }
          res.render('watch', { series: series, episodes: episodes, currentEpisodeIndex: currentEpisodeIndex });
        });
    })
    .catch(function (err) {
      console.log(err);
      return res.sendStatus(404);
    });
});

module.exports = router;
