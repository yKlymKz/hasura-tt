run_next_production()
{
    export $(grep -v '^#' ./client/.env | xargs)

    cd ./client
    npm run build
    npm run start 
}

update_local_schema() {
    export $(grep -v '^#' .env | xargs)

    cd hasura
    hasura metadata apply --endpoint http://localhost:8080 --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET
    hasura migrate apply --endpoint http://localhost:8080 --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --database-name "main"
}
run_next_production

sleep 5

docker-compose  up -d

update_local_schema
