const mysql = require("mysql");

// create Connection....
const con = mysql.createConnection({
  host: "localhost", //host name
  post: 3306, //port number
  user: "root", //username
  password: "", //password
  database: "test", //database name
});

con.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected To Mysql");
    
    // con.query("SHOW TABLES", function (error, results, fields) {
    //   if (error) throw error;
    //   console.log("Tables: ", results);
    // });

  }
});

module.exports = con;
