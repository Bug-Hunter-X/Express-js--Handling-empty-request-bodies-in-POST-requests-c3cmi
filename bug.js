const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // ... some database operation to save newUser
  res.status(201).json(newUser);
});

//Problem: Incorrect handling of empty request body
//If the client sends a POST request to /users without a body, req.body will be undefined, causing an error in the database operation.