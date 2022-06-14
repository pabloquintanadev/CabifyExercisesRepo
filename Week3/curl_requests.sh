#Adding a message
time curl --location --request POST 'http://localhost:9007/message' \
--header 'Content-Type: application/json' \
--data-raw '{
  "body": "this is a body",
 "destination": "madrid"
}'

echo "\n POST made new record added \n"

# Getting a list of messages port 9007
time curl --location --request GET 'http://localhost:9007/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'

# Getting a list of messages port 9008
time curl --location --request GET 'http://localhost:9008/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'

# Getting a list of messages port 9009
time curl --location --request GET 'http://localhost:9009/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'


# Getting a list of messages
time curl --location --request POST 'http://localhost:9017/credit' \
--header 'Content-Type: application/json' \
--data-raw '{
  "amount": 3
}'


