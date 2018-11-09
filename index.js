const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/frontend'));
var models = require('./models');

app.get('/homepage',(req,res) =>{
    res.sendFile(__dirname + '/frontend/index.html');
})

app.get('/adminlogin', (req, res) => {
    res.sendFile(__dirname + '/frontend/adminlogin.html');
})

app.get('/adminsignup', (req, res) => {
    res.sendFile(__dirname + '/frontend/adminsignup.html');
})

app.get('/studentsignup', (req, res) => {
    res.sendFile(__dirname + '/frontend/studentsignup.html');
})

app.get('/studentlogin', (req, res) => {
    res.sendFile(__dirname + '/frontend/studentlogin.html');
})

app.get('/adminhome', (req, res) => {
    res.sendFile(__dirname + '/frontend/adminhome.html');
})

app.get('/createnewentry', (req, res) => {
    res.sendFile(__dirname + '/frontend/createnewentry.html');
})

//Rest Api for loggin in admininstrator
app.post('/api/login', (req, res) => {
    con.query(`SELECT * FROM users WHERE user = '${req.body.user}'`, function (err, result) {
        if (result.length > 0) {
            if (result[0].password === req.body.password) {
                res.status(200).json({ "success": 'SOEN 341', "id": result[0] });
            } else {
                res.status(400).json({ "error": 'password do not match' });
            }
        } else {
            res.status(500).json({ "error": 'User not found' });
        }
    });
});

//Rest Api for sign-up of admininstrator
app.post('/api/signup/admin', (req, res) => {
    con.query(`INSERT INTO users(FirstName,LastName,user,password,Email,PhoneNumber) 
    VALUES('${req.body.FirstName}','${req.body.LastName}','${req.body.user}',
    '${req.body.password}','${req.body.Email}','${req.body.PhoneNumber}')`, function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            if (result.affectedRows) {
                res.status(200).json({ "success": 'SOEN 341' });

            }
            else
                res.status(400).json({ "error": 'Value unable to insert' });
        });
});

//Rest Api for sign-up of student
app.post('/api/signup/student', (req, res) => {
    const student = new models.Student(req.body.FirstName,req.body.LastName,req.body.UserName,req.body.Password,
        req.body.Email,req.body.PhoneNumber);
    student.insert(function(type) {
        if(type==='success')
        res.status(200).json({ "success": 'SOEN 341' });
    else 
        res.status(400).json({ "error": 'Error not able to insert value in to database' });
    });
});

//Rest Api for logging in of student
app.post('/api/student/login', (req, res) => {
    models.Student.login(req.body.UserName,req.body.Password,function(type){
        if(type==='success')
        res.status(200).json({ "success": 'SOEN 341' });
        else if(type==='error')
        res.status(400).json({ "error": 'password do not match' });
        else
        res.status(500).json({ "error": 'User not found' });
    });
});

// Viewing active users
app.post('/api/view/students', (req, res) => {
    con.query(`SELECT * FROM students`, function (err, result) {
        if (result.length > 0) {

            res.status(200).json({ "success": 'SOEN 341', "id": result });

        } else {
            res.status(500).json({ "error": 'Not able to fetch values' });
        }
    });
});
//create book entry
app.post('/api/create/book', (req, res) => {
    const book = new models.Book(req.body.Title,req.body.Author,req.body.Format,req.body.Pages,req.body.Publisher,req.body.Language,req.body.ISBN10,req.body.ISBN13);
    book.insert(function(type) {
        if(type === 'success') {
            res.status(200).json({ "success": 'SOEN 341' + req.body.Title});
        } else {
            res.status(400).json({ "error": 'Error not able to insert value in to database' });
        }
    });
});
//create magazine entry
app.post('/api/create/magazine', (req, res) => {
    const magazine = new models.Magazine(req.body.Title,req.body.Language,req.body.Publisher,req.body.ISBN10,req.body.ISBN13);  
    magazine.insert(function(type){
    
    if (type==='success') {
        res.status(200).json({ "success": 'SOEN 341'});
    }
    else {
        res.status(400).json({ "error": 'Error not able to insert value in to database' });
    }
});     
});

//create music entry
app.post('/api/create/music', (req, res) => {
    con.query(`INSERT INTO music(Type,Title,Artist,Label,Release_Date,ASIN) 
    VALUES('${req.body.Type}','${req.body.Title}','${req.body.Artist}','${req.body.Label}','${req.body.ReleaseDate}',
    '${req.body.ASIN}')`, function (err, result) {

            console.log("Number of records inserted: " + result.affectedRows);
            if (result.affectedRows) {
                
                res.status(200).json({ "success": 'SOEN 341'});
            }
            else {
                res.status(400).json({ "error": 'Error not able to insert value in to database' });
            }
        });
});
//Create movie entry
app.post('/api/create/movie', (req, res) => {
    con.query(`INSERT INTO movie(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time) 
    VALUES('${req.body.Title}','${req.body.Director}','${req.body.Producers}','${req.body.Actors}','${req.body.Language}',
    '${req.body.Subtitles}', '${req.body.Dubbed}', '${req.body.ReleaseDate}' ,'${req.body.RunTime}'
    )`, function (err, result) {
console.log(err);
            console.log("Number of records inserted: " + result.affectedRows);
            if (result.affectedRows) {
                
                res.status(200).json({ "success": 'SOEN 341'});
            }
            else {
                res.status(400).json({ "error": 'Error not able to insert value in to database' });
            }
        });
});

//Delete entry
app.post('/api/delete/:entry/:id',(req,res)=>{
con.query(`DELETE FROM ${req.params.entry} WHERE id = ${req.params.id}`,
function(err,result) {
    console.log(err);
console.log("Number of rows Deleted: " + result.affectedRows);
if(result.affectedRows){
    res.status(200).json({"success": 'SOEN 341'});
}
else{
    res.status(400).json({"error":'Entry not present in the database'});
}
});
});

//Show data
app.post('/api/show/:entry',(req,res)=>{
    var x = req.query.entry;
   con.query(`SELECT * FROM ${x}`,function(err,result){
       console.log(err);
       if (result.length > 0) {

        res.status(200).json({ "success": 'SOEN 341', "id": result });

    } else {
        res.status(500).json({ "error": 'Not able to fetch values' });
    }
     }); 
});

app.listen(3000, () => console.log("Listening on 3000 port...."));

//Search data
app.get('/api/search/:entry/:query',(req,res)=>{
const entry = req.params.entry;
const query = req.params.query;

if(entry==="Book")
{
    console.log("book");
    models.Book.search(query,function(type,result){
        if(type==='success')
        res.status(200).json({
            "success":"soen 341","id":result});
        else
        res.status(400).json({"error":'No results found'});
    });
}
if(entry==="Magazine")
{
    console.log("magazine");
    models.Magazine.search(query,function(type,result){
        if(type==='success')
        res.status(200).json({
            "success":"soen 341","id":result});
        else
        res.status(400).json({"error":'No results found'});
    });
}
if(entry==="Music")
{
    console.log("music");
    models.Music.search(query,function(type,result){
        if(type==='success')
        res.status(200).json({
            "success":"soen 341","id":result});
        else
        res.status(400).json({"error":'No results found'});
    });
}
if(entry==="Movie")
{
    console.log("movie");
    models.Movie.search(query,function(type,result){
        if(type==='success')
        res.status(200).json({
            "success":"soen 341","id":result});
        else
        res.status(400).json({"error":'No results found'});
    });
}
});

app.listen(3000, () => console.log("Listening on 3000 port...."));
