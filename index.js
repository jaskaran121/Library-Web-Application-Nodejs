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

//For query in the url
app.get('/api', (req , res) => {
    res.send(req.query);
});

//Rest Api for loggin in admininstrator
//Seif
app.post('/api/login', (req, res) => {
    models.Admin.login(req.body.user,req.body.password,function(type){
        if(type==='success')
        res.status(200).json({ "success": 'SOEN 341'});
        else if(type==='error')
        res.status(400).json({ "error": 'Password do not match not' });
        else
        res.status(500).json({ "error": 'User not found' });
    });
});

//Rest Api for sign-up of admininstrator
//Seif
app.post('/api/signup/admin', (req, res) => {
    const admin = new models.Admin(req.body.FirstName,req.body.LastName,req.body.user,req.body.password,req.body.Email,req.body.PhoneNumber);
    admin.insert(function(type) {
        if (type ==='success') {
            res.status(200).json({ "success": 'SOEN 341' });
        }
        else
            res.status(400).json({ "error": 'Value unable to insert' });
    });
});

//Rest Api for sign-up of student
//AKhil
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
//Akhil
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
//Seif
app.post('/api/view/students', (req, res) => {
    models.Admin.viewUsers(function(type,result){
        if(type==='success')
        res.status(200).json({ "success": 'SOEN 341', "id": result });
        else 
            res.status(500).json({ "error": 'Not able to fetch values' });
    });
});

//create book entry
//Jaskaran
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
//Himalaya
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
//Hasan
app.post('/api/create/music', (req, res) => {
    const music = new models.Music(req.body.Type,req.body.Title,req.body.Artist,req.body.Label,req.body.ReleaseDate,req.body.ASIN);
    music.insert(function(type){
        if (type==='success') {

            res.status(200).json({ "success": 'SOEN 341'});
        }
        else {
            res.status(400).json({ "error": 'Error not able to insert value in to database' });
        }
    });
});
//Create movie entry
//Claudia
app.post('/api/create/movie', (req, res) => {
    const movie = new models.Movie(req.body.Title,req.body.Director,req.body.Producers,req.body.Actors,req.body.Language,
        req.body.Subtitles,req.body.Dubbed,req.body.Release_Date,req.body.Run_Time);
        movie.insert(function(type){
            if (type==='success') {

                res.status(200).json({ "success": 'SOEN 341'});
            }
            else {
                res.status(400).json({ "error": 'Error not able to insert value in to database'});
            }
        });  
        });

//Delete entry
//Jaskaran
app.get('/api/delete/:entry/:id',(req,res)=>{
    var entry = req.params.entry;
    var id = req.params.id;
        models.Book.delete(entry,id,function(type){
        if(type==='success')
            res.status(200).json({ "success": 'SOEN 341'});
        else
            res.status(500).json({ "error": 'Not able to fetch values' });
});
});


//Show data
//Jaskaran
app.get('/api/show/:entry',(req,res)=>{
    var entry = req.params.entry;
    //models.setentry(entry);
    models.Book.show(entry,function(type,result){
    if(type==='success')
            res.status(200).json({ "success": 'SOEN 341',"id": result});
        else
            res.status(500).json({ "error": 'Not able to fetch values' });
});
});  

//Search data
//Akhil
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