const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./node-express-course/02-express-tutorial/navbar-app/index.html');
const homesStyles = readFileSync('./node-express-course/02-express-tutorial/navbar-app/styles.css');
const homeImage = readFileSync('./node-express-course/02-express-tutorial/navbar-app/logo.svg');
const homeLogic = readFileSync('./node-express-course/02-express-tutorial/navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  // request method
  console.log(req.url);
  if (req.url == '/') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write(homePage);
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

  // styles
  else if (req.url === '/styles.css') {
    res.writeHead(200, {
      'content-type': 'text/css',
    });
    res.write(homesStyles);
    res.end();
  }

  // logo svg
  else if (req.url === '/logo.svg') {
    res.writeHead(200, {
      'content-type': 'image/svg+xml',
    });
    res.write(homeImage);
    res.end();
  }

  // browser logic
  else if (req.url === '/browser-app.js') {
    res.writeHead(200, {
      'content-type': 'text/javascript',
    });
    res.write(homeLogic);
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
