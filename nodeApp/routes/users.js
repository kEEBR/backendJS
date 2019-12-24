var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient,
  format = require("util").format;
MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
  if (err) throw err;
  var db = client.db("test");
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    db.collection("favourites")
      .find()
      .toArray(function(err, result) {
        console.dir(result);
        res.json(favourites.name);
      });
  });
  router.post("/", function(req, res, next) {
    db.collection("favourites")
      .insert()
      .toArray(function(err, result) {
        console.dir(result);
        res.end(favourites.name);
      });

    router.delete("/", function(req, res, next) {
      res.end(favourites.name);
    });
  });
});
module.exports = router;
