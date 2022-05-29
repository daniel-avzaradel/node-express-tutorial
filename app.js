const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our server');
  } else if (req.url === '/about') {
    // BLOCKING CODE !!!
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 999; j++) {
        console.log(`${j}, ${i}`);
      }
    }
    res.end('About page');
  } else {
    res.end('404, page not found');
  }
});

server.listen(5000, () => {
  console.log(`Server is running on port 5000...`);
});
