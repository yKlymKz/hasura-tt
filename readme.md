# Project set up

In two words, to start project initially run:

- `init-project.sh`
- `docker-compose up`
- `update-local-hasura.sh` (when you see that previous script printed logs starting with "graphql-engine_1" )

Note: alternatvely to `docker-compose up` you can run sh script `run-local-production`. Also there you can find instructions for manual project start up

#### Description:

First of all, you need to have docker and docker-compose installed.
On git clone you'd like to fill `.env` files and install dependencies such as `hasura-cli` and this can be done after running `init-project.sh` script. After this you can start development by simply running `docker-compose up`.
Also, when you need to run hasura migrations and metadata on project set up or when your local hasura server may be outdated. This is done by `update-local-hasura.sh` script

## Project structure

Project includes three main parts:

- "hasura" directory includes hasura cli configuration, migrations and metadata for hasura instance
- "client" directory represents next.js app with both front end and backend
- root folder files

### Envs

To set up the project you must create .env file at root directory and fill it with data. .env file isn't tracked by git so at it's place there is "env.example" file which show where the .env file should be created and desired fieldnames for it

1. Hasura server

- _HASURA_GRAPHQL_ADMIN_SECRET=admin_ -- password to access hasura web ui. Must be same with similar field in next-app
- _ACTION_BACKEND_URL=http://host.docker.internal:3000_ -- base url of running next app
- _POSTGRES_PASSWORD_=postgrespassword\* -- password for postgres user. Other credentials are set to default
- _HASURA_GRAPHQL_DATABASE_URL_=postgres://postgres:postgrespassword@postgres:5432/postgres -- postgress db url which is used for hasura metadata and data

2. Next app

- APP_ENV= -- `development` or `production` chooses if docker-compose should start production next server
- _PAGES_JSON_URL=_ -- if not empty, JSON file with page data will be fetched by this field value as url

## Remote Deployment

For deployment heroku services were used and additionaly google cloud platform for storing pages JSON.

Hasura console, password `test`:

- https://hasura-engine-test-app.herokuapp.com/console

Next.js clint:

- https://hasura-test-task.herokuapp.com/test2

Note: because of old code version some routes of client app are cached on deplyment. These are `test`, `test1` ... `test5`.

Pages json

- https://storage.googleapis.com/hasura_test/pages.json
