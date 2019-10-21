var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Rahul",
  password: "blueberry",
  database: "database"
  //insecureAuth : true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, papername VARCHAR(255),  aname1 VARCHAR(255), atelno1 INT, aemail1 VARCHAR(255), aorg1 VARCHAR(255), aname2 VARCHAR(255), atelno2 INT, aemail2 VARCHAR(255), aorg2 VARCHAR(255), aname3 VARCHAR(255), atelno3 INT, aemail3 VARCHAR(255), aorg3 VARCHAR(255), aname4 VARCHAR(255), atelno4 INT, aemail4 VARCHAR(255), aorg4 VARCHAR(255), aname5 VARCHAR(255), atelno5 INT, aemail5 VARCHAR(255), aorg5 VARCHAR(255)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}); 