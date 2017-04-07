var express = require('express');
var router = express.Router();
var db;
var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb://localhost:27017/list';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, database) {
  if (err) {
      console.log("NOT Connected to Database");
  } else {
      console.log("Connected successfully to Database");
      db = database;
      console.log(db);
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(db);
});

module.exports = router;
