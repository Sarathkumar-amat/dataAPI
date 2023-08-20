const express = require('express');
const bodyParser = require('body-parser');
const { electricity } = require('./data');

const app = express();
const port = 3000;

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Sample JSON data array
const data = electricity;

// POST endpoint to respond with the sample data array
app.post('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
