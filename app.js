const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Areesha Jenkins Pipeline! v2 - Auto Deployed! Making again and again\n');
}).listen(3000, () => console.log('Running on port 3000'));
