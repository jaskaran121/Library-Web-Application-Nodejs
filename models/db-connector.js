var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "librarycatalogue"
});

//SQL connection
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
//Singleton pattern
class db_connector {
    constructor() {
        this.instance = null;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = con;
            return this.instance;
       } 
       else
       return this.instance; 
    }
}

module.exports = db_connector;