const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our server');
  }
  if (req.url === '/about') {
    res.end(`here's our short history`);
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We cannot find the page you are looking for</p>
    <a href='/'>back to the home page</a>`,
  );
});

server.listen(5000);
