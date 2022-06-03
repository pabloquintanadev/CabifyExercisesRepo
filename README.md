# Cabify Message App

## PORTS

- Message App hosted in port 3000
- Message Proxy hosted in port 9001

## SERVER ROUTES

| METHOD | URL | DESCRIPTION |
| ------------- | ------------- | ------------- |
| GET |  /api/messages  |  Retrieves all the stored messages|
| POST |  /api/messages  | Receives a message from the client and sends it to the server |
| DELETE |  /api/messages  |  Delete all the stored messages in databse|


## API

You can test the API running a command line and executing a Postman collection. You can read further information in the [API testing documentation](https://github.com/wablopilson/CabifyExercisesRepo/blob/pablo.quintana/exercise02/API%20testing/doc/APITesting.md)


## DB

All the messages are being stored in an external database. You can read futher information in the [Message DB documentation](https://github.com/wablopilson/CabifyExercisesRepo/blob/pablo.quintana/exercise03/message/doc/DBdoc.md)
