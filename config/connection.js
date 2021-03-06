const mysql = require("mysql");


if (process.env.JAWSDB_URL){

    connection =mysql.createConnection(process.env.JAWSDB_URL);
  }
  else{
      const connection = mysql.createConnection({
          host: "localhost",
          port: 3306,
          user: "root",
          password: "password",
          database: "burgers_db"
      });
}



connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});


//ORM export
module.exports = connection;

