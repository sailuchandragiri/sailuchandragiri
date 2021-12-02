const express = require("express");

const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/movies2");
}



// step-1:- create the schema
const userSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    movie_name: {type: String, required:true},
    movie_genre: {type: String, required: true},
    production_year: {type: Number, required: true},
    budget: {type:Number, required: true}
});

//step:-2 connect the schema with the user collections

const User = mongoose.model("user", userSchema);
const app = express();
app.use(express.json());

//post: Sending the movies information

app.post("/users", async(req, res)=>{
    const user = await User.create(req.body);
    return res.status(201).send({user});
})

//getting the all movies
app.get("/users", async(req, res)=>{
    const users = await User.find().lean().exec();
    return res.status(200).send({users});
})


///updating a movie
app.patch("/users/:id", async(req, res)=>{
    const users = await User.findByIdAndUpdate(req.params.id, req.body,{new: true});
    return res.status(200).send({users});
})

//deleting a movie
app.delete("/users/:id", async(req, res)=>{
    const user = await User.findByIdAndRemove(req.params.id);
    return res.status(200).send({user});
})

app.listen(2345, async function(){
    await connect();
    console.log("Listening to the port");
})