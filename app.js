const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
  res.status(200).send('about page');
});

app.all('*', (req, res) => {
  console.log('user hit resource page');
  res.status(404).send('<h1>404 PAGE NOT FOUND</h1>');
});

app.listen(5000, () => {
  console.log(`Server running on port 5000...`);
});
