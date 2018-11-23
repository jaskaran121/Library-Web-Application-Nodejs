const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/frontend'));
var models = require('./models');
var mapper = require('./DataMapper');
app.get('/homepage', (req, res) => {
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

app.get('/studenthome', (req, res) => {
    res.sendFile(__dirname + '/frontend/studenthome.html');
})

app.get('/adminhome', (req, res) => {
    res.sendFile(__dirname + '/frontend/adminhome.html');
})

app.get('/createnewentry', (req, res) => {
    res.sendFile(__dirname + '/frontend/createnewentry.html');
})

app.get('/activeusers',(req,res) =>{
    res.sendFile(__dirname + '/frontend/activeusers.html');
})

app.get('/deleteentry',(req,res) =>{
    res.sendFile(__dirname + '/frontend/deleteentry.html');
})

app.get('/modifyentry',(req,res) =>{
    res.sendFile(__dirname + '/frontend/modifyentry.html');
})

app.get('/modify',(req,res) =>{
    res.sendFile(__dirname + '/frontend/modify.html');
})

// Viewing active users
app.post('/api/view/students', (req, res) => {
    mapper.viewActiveUsers(function (type, result) {
        if (type === 'success')
            res.status(200).json({ "success": 'SOEN 341', "id": result });
        else
            res.status(500).json({ "error": 'Not able to fetch values' });
    })
});

//create book entry
app.post('/api/create/book', (req, res) => {

    mapper.create_Book(req.body.Title, req.body.Author, req.body.Format,
        req.body.Pages, req.body.Publisher, req.body.Language,
        req.body.ISBN10, req.body.ISBN13, function (type) {
            if (type === 'success') {
                res.status(200).json({ "success": 'SOEN 341' + req.body.Title });
            } else {
                res.status(400).json({ "error": 'Error not able to insert value in to database' });
            }
        });
});

//Delete entry item
app.get('/api/delete/:entry/:id', (req, res) => {
    var entry = req.params.entry;
    var id = req.params.id;
    mapper.delete(entry, id, function (type) {
        if (type === 'success')
            res.status(200).json({ "success": 'SOEN 341' });
        else
            res.status(500).json({ "error": 'Not able to fetch values' });
    });
});

//Update entry
app.post('/api/update/:entry/:id', (req, res) => {
    if (req.params.entry === 'Book') {
        mapper.update_Book(req.body.Title, req.body.Author, req.body.Format,
            req.body.Pages, req.body.Publisher, req.body.Language, req.body.ISBN10, req.body.ISBN13,
            req.params.id, function (type) {
                if (type === 'success')
                    res.status(200).json({ "success": 'SOEN 341' });
                else
                    res.status(500).json({ "error": 'Not able to update values' });
            })
    }}

//Search      
app.get('/api/search/:entry/:query/:filter', (req, res) => {
    const entry = req.params.entry;
    const query = req.params.query;
    const filter = req.params.filter;
    if (entry === "Book") {
        if (filter === "Random") {
            mapper.searchFilter_Book(query, null, function (type, result) {
                if (type === 'success')
                    res.status(200).json({
                        "success": "soen 341", "id": result
                    });
                else
                    res.status(400).json({ "error": 'No results found' });
            });
        }
        else {
            mapper.searchFilter_Book(query, filter, function (type, result) {
                if (type === 'success')
                    res.status(200).json({
                        "success": "soen 341", "id": result
                    });
                else
                    res.status(400).json({ "error": 'No results found' });
            });
        }
    }}
app.listen(3000, () => console.log("Listening on 3000 port...."));
