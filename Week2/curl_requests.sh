#Adding a message
time curl --location --request POST 'http://localhost:9003/message' \
--header 'Content-Type: application/json' \
--data-raw '{
  "body": "this is a body",
 "destination": "madrid"
}'

echo "\n POST made new record added \n"

# Getting a list of messages
time curl --location --request GET 'http://localhost:9003/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'

# Getting a list of budgets
time curl --location --request GET 'http://localhost:9003/budgets' \
--header 'Content-Type: application/json' \
--data-raw ''

# Getting a list of messages
time curl --location --request POST 'http://localhost:9003/credit' \
--header 'Content-Type: application/json' \
--data-raw '{
  "amount": 3
}'


