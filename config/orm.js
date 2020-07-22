const connection = require("./connection.js");


const orm={
    //selectAll()
    selectAll: function (cb){
        const query = connection.query("SELECT * FROM burgers", function(err,res){
            if (err) throw err;
            cb(res);
        })
    },



    //insertOne()
    insertOne: function(burgerName){
        const query = connection.query("INSERT INTO burgers SET ?", {burger_name: burgerName}, function(err,res){
            if (err) throw err;
            console.log(res.affectedRows + "burger added. \n");
        })

    },




    //updateOne() update cuz devoured status
    updateOne: function(burgerUpdate){
        const query = connection.query("UPDATE burgers SET devoured = true WHERE ID = ?", { id: burgerUpdate}, function(err,res){
            console.log(res.affectedRows + "Burger updated \n";)
        })
    }
}


module.exports = orm;