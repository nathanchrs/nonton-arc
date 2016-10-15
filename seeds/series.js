
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('series').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('series').insert({id: 1, title: 'The Martian', year: 2015, genre: 'Sci-fi', synopsis: 'A single astronaut is stranded on Mars, leaving him to improvise for his survival', posterPath: '/public/series/themartian/poster.jpg'}),
        knex('series').insert({id: 2, title: 'Interstellar', year: 2015, genre: 'Sci-fi', synopsis: 'Astronauts surveys a faraway galaxy to find another home for humanity', posterPath: '/public/series/interstellar/poster.jpg'}),
        knex('series').insert({id: 3, title: 'Kimi no Na Wa', year: 2015, genre: 'Anime, Drama', synopsis: 'A drama about...', posterPath: '/public/series/kiminonawa/poster.jpg'})
      ]);
    });
};
