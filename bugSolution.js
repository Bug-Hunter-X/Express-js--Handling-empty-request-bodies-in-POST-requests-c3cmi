const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }
  const newUser = req.body;
  // ... some database operation to save newUser
  res.status(201).json(newUser);
});
//Solution: Check for empty request body before processing