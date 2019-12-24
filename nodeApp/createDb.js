var MongoClient = require("mongodb").MongoClient,
  format = require("util").format;

MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
  if (err) throw err;

  var db = client.db("test");

  db.collection("favourites").findOne({}, function(findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
  });

  db.collection("favourites")
    .find()
    .toArray(function(err, results) {
      console.dir(results);
      client.close();
    });
});
