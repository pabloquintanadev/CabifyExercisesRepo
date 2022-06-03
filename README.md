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

## DB message model

- ``destination: String``
- ``message: String``
- ``number: Number``
- ``status: String``
    - ``enum: [PENDANT, SENT, CONFIRMED]``

### Testing the db

| If the messageapp responses with...      | then the message... |
| ------------- | ------------- | 
| ...a 200 status code|  ...is stored with CONFIRMED status (sent and confirmed) |  
| ...a 500 status code |  ...is stored with PENDANT status (not sent, not confirmed)  | 
| ...a 504 status code (server timeout)  |  ...is stored with SENT statuss (sent but not confirmed)   | 

