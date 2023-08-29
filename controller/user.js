const con = require("../db/config");

const showTable = async (req, res) => {
  con.query("SHOW TABLES", (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
    } else {
      res.send(results);
      console.log("Tables:", results);
    }
  });
};
// SELECT COUNT(ProductID)
// FROM Products
// WHERE price > 20;
const showTabledata = async (req, res) => {
  con.query("SELECT COUNT(age) FROM mytable WHERE age > 20", (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
    } else {
      res.send(results);
    }
  });
};

const insertData = async (req, res) => {
  const { name, age } = { name: "Hello", age: 12 };

  const sql = "INSERT INTO mytable (name, age) VALUES (?)";
  const values = [["Hello", 11]];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Data inserted successfully");
      res.send("Data inserted successfully");
    }
  });
};

const deleteData = async (req, res) => {
  const { name } = { name: "pankaj" };

  const checkSql = "SELECT * FROM mytable WHERE name = ?";

  con.query(checkSql, [name], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
    } else if (results.length === 0) {
      res.send("Data Not exits");
    } else {
      const sql = "DELETE FROM mytable WHERE name= ?";
      con.query(sql, [name], (dltError, results) => {
        if (dltError) {
          console.log("Error Data Not Deleted" + dltError);
        } else {
          res.send("Data Deleted");
        }
      });
    }
  });
};

const updateData = async (req, res) => {
  const sql = "update mytable set name='akshada' where name='aks'";

  con.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
    } else {
      res.send("Data Update Succesfully");
    }
  });
};

module.exports = {
  showTable,
  showTabledata,
  insertData,
  deleteData,
  updateData,
};
