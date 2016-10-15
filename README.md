# nonton-arc

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Video streaming site - ARC 2016.

## Setup for Development

1. Clone the Git repository
2. `npm install`, then `npm install knex -g`
3. Create an empty MySQL/MariaDB database
4. Edit configurations in `config` to match local environment and DB
5. `knex migrate:latest` to make DB tables
6. `knex seed:run` to seed DB (optional)
7. `npm start` to run

## Code Style

This project uses [Javascript Semi-Standard Style](https://github.com/Flet/semistandard). Use `npm lint` to check for compliance.
