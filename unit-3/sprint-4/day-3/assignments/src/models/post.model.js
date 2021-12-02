
const mongoose = require("mongoose");

//step:-1 create the schema for posts
const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required:true},
    author: {type: mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref:"tag", required:true}],
},{
    versionKey:false, //-V
    timestamps:true //created at updated at
})

//step:-2 connect the shema with the posts collection
module.exports = mongoose.model("post", postSchema)//posts