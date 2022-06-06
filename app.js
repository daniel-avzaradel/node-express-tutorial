const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('User hit the resource page');
  res.status(200).send('Home Page');
});

app.listen(5000, () => {
  console.log(`Server is listening to port 5000...`);
});
