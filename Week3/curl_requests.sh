#Adding a message
time curl --location --request POST 'http://localhost:48151/message' \
--header 'Content-Type: application/json' \
--data-raw '{
  "body": "this is a body",
 "destination": "madrid"
}'

echo "\n POST made new record added \n"

# Getting a list of messages port 80
time curl --location --request GET 'http://localhost:48151/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'

# Getting a list of messages port 80
time curl --location --request GET 'http://localhost:48151/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'

# Getting a list of messages port 80
time curl --location --request GET 'http://localhost:48151/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
  "destination": "STRING",
  "body": "STRING"
}'


# Creating a new message
time curl --location --request POST 'http://localhost:48151/credit' \
--header 'Content-Type: application/json' \
--data-raw '{
  "amount": 3
}'


