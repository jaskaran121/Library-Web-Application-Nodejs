const express = require('express');
const bodyparser = require('body-parser');
const app = express(); 
app.use(bodyparser.urlencoded({extended: true}));
app.use( bodyparser.json() );   
app.use(express.static(__dirname + '/frontend'));
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_login"
});

//SQL connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/adminlogin', (req, res) => {
    res.sendFile(__dirname +'/frontend/adminlogin.html');
})

app.post('/api/login',(req,res) =>{
    con.query(`SELECT * FROM users WHERE user = '${req.body.user}'` ,function (err, result) {
        if(result.length>0)
        {
            if(result[0].password===req.body.password)
            {
                res.status(200).json({ "success": 'SOEN 341', "id": result[0]});
            } else {
                res.status(400).json({ "error": 'password do not match'});
            }
        } else {
            res.status(500).json({ "error": 'User not found'});
        }
    });
});


app.post('/api/signup/admin',(req,res) =>{
    
    con.query(`INSERT INTO users(FirstName,LastName,user,password,Email,PhoneNumber) 
    VALUES('${req.body.FirstName}','${req.body.LastName}','${req.body.user}',
    '${req.body.password}','${req.body.	Email}','${req.body.PhoneNumber}')`,function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows); 
        if(result.affectedRows)
        {
            res.status(200).json({ "success": 'SOEN 341'});
            
        }
         else
        res.status(400).json({ "error": 'Value unable to insert'});
    });
  //Just for checking
    // con.query(`SELECT * FROM users WHERE user = '${req.body.user}'` ,function (err, result) {
    //     if(result.length>0)
    //     {
    //         if(result[0].password===req.body.password)
    //         {
    //             res.status(200).json({ "success": 'SOEN 341', "id": result[0]});
    //         } else {
    //             res.status(400).json({ "error": 'password do not match'});
    //         }
    //     } else {
    //         res.status(500).json({ "error": 'User not found'});
    //     }
    // });
//
});
