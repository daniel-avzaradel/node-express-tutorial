const http = require('http');

const server = http.createServer((req, res) => {
  // request method
  console.log(req.url);
  if (req.url == '/') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write('<h1>Server online</h1>');
    res.end();
  }

  // about page
  else if (req.url === '/about') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write('<h1>About page</h1>');
    res.end();
  }

  // 404 page not found
  else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Express tutorial. Server is running on port 5000...`);
});
