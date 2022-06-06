const express = require('express');
const app = express();
const { people } = require('./data');

app.get('/', (req, res) => {
  console.log('user hit resource page', people);
  res.status(200).send('Home Page');
});

app.get('/api/people', (req, res) => {
  res.status(200).json({ message: true, data: people });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000!`);
});
