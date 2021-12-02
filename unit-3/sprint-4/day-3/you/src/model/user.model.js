
const mongoose = require("mongoose");

//step-1:- create the schema 

const userSchema = new mongoose.Schema({
    first_name: {type: String, required:true},
    last_name: {type: String, required:false},
    date_of_birth: {type:String, required:true},
    gender: {type: String, required:true}
});

//step:-2 connect the schema with the users collection

const User = mongoose.model("user", userSchema);

module.exports = User;
