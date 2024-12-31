# Express.js: Handling Empty Request Bodies in POST Requests

This repository demonstrates a common error in Express.js applications when handling POST requests with empty request bodies and provides a solution.

## Bug

The bug lies in the improper handling of empty request bodies in a POST request. If a client sends a POST request to the `/users` endpoint without including a request body, `req.body` will be undefined.  Attempting to access properties of `req.body` in this scenario will result in an error.

## Solution

The solution involves adding a check to ensure that `req.body` is not undefined before processing the data.  The improved code adds a check and handles the case of an empty request body appropriately.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/users` with an empty body using a tool like curl or Postman.
5. Observe the error message in the console.
6. Run `node bugSolution.js` and repeat the POST request; note the improved response.