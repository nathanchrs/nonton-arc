
exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTable('series', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('year');
      table.string('genre');
      table.string('synopsis');
      table.string('posterPath');
    }),

    knex.schema.createTable('episodes', function (table) {
      table.increments('id').primary();
      table.integer('order');
      table.string('title');
      table.dateTime('releaseDate');
      table.string('description');
      table.string('videoPath');
    })

  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('series'),
    knex.schema.dropTable('episodes')
  ]);
};
