const express = require('express');
const app = express();

// req => middleware => res
const logger = require('./logger');
const authorize = require('./authorize');

// apply middleware to any route after '/api'
// app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Products');
});

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000...`);
});
