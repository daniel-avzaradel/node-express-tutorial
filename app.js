const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Server online');
});

server.listen(5000, () => {
  console.log(`Express tutorial. Server is running on port 5000...`);
});
