/* salvar o arquivo ./app.js */

const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.statusCode = 200;
  res.write(`<h1>Hello World</h1>${new Date()}`);
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});

