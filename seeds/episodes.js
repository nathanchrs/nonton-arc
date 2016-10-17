
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('episodes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('episodes').insert({id: 1, seriesId: 1, order: 1, title: 'The Martian', releaseDate: '2015-10-15', description: 'The Martian full movie', videoPath: '/public/series/themartian/themartian.mp4'}),
        knex('episodes').insert({id: 2, seriesId: 3, order: 1, title: 'Kimi no Na Wa', releaseDate: '2015-12-15', description: 'Kimi no Na Wa (subbed)', videoPath: '/public/series/kiminonawa/kiminonawa.mp4'}),
        knex('episodes').insert({id: 3, seriesId: 2, order: 1, title: 'Interstellar', releaseDate: '2015-11-1', description: 'Interstellar movie', videoPath: '/public/series/interstellar/interstellar.mp4'})
      ]);
    });
};
