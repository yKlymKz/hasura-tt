# inject envs
export $(grep -v '^#' .env | xargs)

cd hasura
hasura metadata apply --endpoint http://localhost:8080 --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET
hasura migrate apply --endpoint http://localhost:8080 --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --database-name "main"