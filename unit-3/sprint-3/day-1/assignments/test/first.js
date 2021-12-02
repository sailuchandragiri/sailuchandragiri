const express = require('express');

const app = express();

const users = require('./users.json');

//console.log(app);

app.get('/', function(req, res){
    res.send("Welcome to home page")
})

app.get('/users',(req, res) => {
    res.send(users)
})

app.listen(3000, () =>  {
    console.log("Successfully entering into the home page");
})
