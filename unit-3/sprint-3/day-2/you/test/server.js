const express = require('express');

const app = express();
app.use(express.json());

const users = require('./users.json');

//console.log(app);

app.get('/', function(req, res){
    res.send(users);
})

app.post('/books',(req, res) =>{
    console.log(req.body);
    users.push(req.body);
    res.send(users);
})

app.get('/books/:id',(req, res) => {
    console.log(req.params.id);
    for(var i=0; i<users.length;i++){
        if(req.params.id==users[i].id){
            res.send(users[i]);
        }
    }
})





app.listen(3000, () =>  {
    console.log("Successfully entering into the home page");
})
