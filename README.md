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

All the messages are being stored in an external database.

### Testing the db

If the ``messageapp``service responses with a **200 status**, the message is stored, but if the reponse is a **500 status**, the message is **not** storaged.
