//Initiallising node modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sql = require("mssql");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// Configure database connection
var dbConfig = {
  user: 'user',
  domain: 'domain',
  password: 'password',
  server: 'dbserver',
  database: 'database'
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){
  sql.connect(dbConfig, function (err) {
    if (err) {
      console.log("Error while connecting database :- " + err);
      res.send(err);
    }
    else {
      // create Request object
      var request = new sql.Request();
      // query to the database
      request.query(query, function (err, rs) {
        if (err) {
          console.log("Error while querying database :- " + err);
          res.send(err);
        }
        else {
          res.send(rs);
          sql.close();
        }
      });
    }
  });
};

//GET API
app.get("/api/user", function(req , res){
  var query = "select * from [Names]";
  executeQuery (res, query);
});

//POST API
app.post("/api/user", function(req , res){
  var formData = {
    papername: req.body.papername,
    aname1: req.body.aname1,
	atelno1: req.body.atelno1,
	aemail1: req.body.aemail1,
	aorg1: req.body.aorg1,
	aname2: req.body.aname2,
	atelno2: req.body.atelno2,
	aemail2: req.body.aemail2,
	aorg2: req.body.aorg2,
	aname3: req.body.aname3,
	atelno3: req.body.atelno3,
	aemail3: req.body.aemail3,
	aorg3: req.body.aorg3,
	aname4: req.body.aname4,
	atelno4: req.body.atelno4,
	aemail4: req.body.aemail4,
	aorg4: req.body.aorg4,
	aname5: req.body.aname5,
	atelno5: req.body.atelno5,
	aemail5: req.body.aemail5,
	aorg5: req.body.aorg5,
  };

  var query = `INSERT INTO Names (papername, aname1, atelno1, aemail1, aorg1, aname2, atelno2, aemail2, aorg2, aname3, atelno3, aemail3, aorg3, aname4, atelno4, aemail4, aorg4, aname5, atelno5, aemail5, aorg5,) VALUES ('${formData.papername}', '${formData.aname1}', '${formData.atelno1}', '${formData.aemail1}', '${formData.aorg1}', '${formData.aname2}', '${formData.atelno2}', '${formData.aemail2}', '${formData.aorg2}', '${formData.aname3}', '${formData.atelno3}', '${formData.aemail3}', '${formData.aorg3}', '${formData.aname4}', '${formData.atelno4}', '${formData.aemail4}', '${formData.aorg4}', '${formData.aname5}', '${formData.atelno5}', '${formData.aemail5}', '${formData.aorg5}')`;
  console.log(query);
  executeQuery (res, query);
});