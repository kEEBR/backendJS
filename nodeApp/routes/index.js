var express = require("express");
var router = express.Router();
const http = require("http");
const port = 5000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello Node.js Server!");
};
const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
