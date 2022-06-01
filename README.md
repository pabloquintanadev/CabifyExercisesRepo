Server routes

| METHOD | URL | DESCRIPTION |
| ------------- | ------------- | ------------- |
| GET |  /api/messages  |  Return a json displaying 'Hello World!" |
| POST |  /api/messages  |   |



*If a key is empty*: should response with a 400 error (bad request) and a info message explaining that neither "destination" nor "message" should be empty. Instead, it actually returns an 200 status

*Send more keys in the JSON object than expected*: should response with a 400 error (bad request) and a info message explaining that the request must only contain "destination" and "message". Instead, it actually returns an 200 status

*(A) duplicate(s) key(s)*: should response with a 400 error (bad request) and a info message explaining that the request keys must be unique. Instead, it actually returns an 200 status.


[a link](https://github.com/wablopilson/CabifyExercisesRepo/blob/pablo.quintana/exercise02/API%20testing/doc/APITesting.md)