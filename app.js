const express = require('express');
const path = require('path');

const app = express();

// set up static and middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h3>404 PAGE NOT FOUND</h3>');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000...`);
});
