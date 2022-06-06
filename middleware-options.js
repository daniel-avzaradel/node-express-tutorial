const express = require('express');
const app = express();
const morgan = require('morgan');
// req => middleware => res
const logger = require('./logger');
const authorize = require('./authorize');

// apply middleware to any route after '/api'
// app.use('/api', [logger, authorize]);

// 1. use vs route
// 2. options - our own / express / third party

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
  console.log(req.user);
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000...`);
});
