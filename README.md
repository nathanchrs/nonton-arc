# nonton-arc

ARC 2016

## Setup for Development

1. Clone the Git repository
2. `npm install`
3. Create an empty MySQL/MariaDB database
4. Edit configurations in `config` to match local environment and DB
5. `knex migrate:latest` to make DB tables
6. `knex seed:run` to seed DB
7. `npm start` to run