# SAVE HASURA ENVS

exec 3<> .env

    echo 'POSTGRES_PASSWORD=postgrespassword' >&3
    echo 'HASURA_GRAPHQL_ADMIN_SECRET=admin' >&3
    echo 'HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:postgrespassword@postgres:5432/postgres' >&3
    echo 'HASURA_SECRET=secret' >&3
    echo 'ACTION_BACKEND_URL=http://host.docker.internal:3000' >&3
    echo 'APP_ENV=development' >&3
# Close fd 3
exec 3>&-

# SAVE NEXT ENVS

exec 3<> ./client/.env

    echo 'HASURA_URL=http://localhost:8080' >&3
    echo 'HASURA_SECRET=admin' >&3
    echo 'PAGES_JSON_URL=https://storage.googleapis.com/hasura_test/pages.json' >&3
    echo 'PORT=3000' >&3

exec 3>&-

# install  deps
sudo apt install npm || true

sudo npm install --global hasura-cli --unsafe-perm=true || true

# install client deps
cd client

npm i

