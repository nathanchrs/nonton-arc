# nonton-arc

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Video streaming site - ARC 2016.

## Setup for Development

1. Clone the Git repository
2. `npm install`
3. `npm install knex -g`
4. `npm install bower -g`
5. `bower install`
6. Create an empty MySQL/MariaDB database
7. Edit configurations in `config` to match local environment and DB
8. `knex migrate:latest` to make DB tables
9. `knex seed:run` to seed DB (optional)
10. `npm start` to run

## Adding movies/episodes

1. Copy the movie files (video files and poster image) to `public/series`
2. Manually insert a record in `series` table for the movie/series (posterPath: path to poster image, beginning with `/public/series/`)
3. Manually insert a record in `episodes` table for each video file (seriesId: the ID of the series/movie for the video, videoPath: path to video file, beginning with `/public/series/`)

## Code Style

This project uses [Javascript Semi-Standard Style](https://github.com/Flet/semistandard). Use `npm lint` to check for compliance.

## Todo

- Implement search by genre/year
- Add interface for adding more videos
