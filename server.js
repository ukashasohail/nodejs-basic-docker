const http = require("http");

http
  .createServer((req, res) => {
    console.log("req received");
    res.end("node server");
  })
  .listen(5000);
