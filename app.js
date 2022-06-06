const express = require('express');
const app = express();
const { products, people } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log(`Server is listening to port 5000...`);
});
