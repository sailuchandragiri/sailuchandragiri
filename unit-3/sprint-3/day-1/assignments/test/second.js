//const express = require('express');
const express = require('express');

const app = express();

const users = require("./users.json");
const books = require("./books.json");

app.use(express.json());



//console.log(app);

app.get('/', function(req, res){
    res.send("Welcome to home page")
})

app.get('/users',(req, res) => {
    res.send(users)
})

app.post('/books',function(req,res){
    console.log("name:", req.name);
    res.send(books);
})

app.get('/books/:id',function(req, res){
    let ele = req.params.id
    for(let i=0;i<books.length;i++){
        if(Number(books[i].id)===Number(ele)){
            res.send(books[i]);
        }
    }
    console.log(ele);
})

//updating
app.patch("/books/:id", function(req, res){
    let ele = req.params.id
    for(let i=0;i<books.length;i++){
        if(Number(books[i].id)===Number(ele)){
            res.send(req.body);
        }
    }
    console.log(ele);
})

//deleting
app.delete("/books/:id",function(req, res){
    let ele = req.params.id
    for(let i=0;i<books.length;i++){
        if(Number(books[i].id)===Number(ele)){
            res.send(books[i]);
        }
    }
    console.log(ele);
})


app.post("/books",validate({firstname:"required"}),(req, res)=>{
    console.log(req.body);
    res.send(users);
})

function validate(data){
    return(req, res,next)=>{
        Object.keys(data).forEach((items)=>{
            if(data[items]==="required"){
                if(!req.query[items]){
                    res.send(`Enter the ${items} in the form`)
                }
            }
        });
        next();
    }
}

app.listen(2345, () =>  {
    console.log("Successfully entering into the home page");
})
