const express = require("express");

const mongoose  = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11");
}


//step-1:- create the schema 

const userSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    first_name: {type: String, required:true},
    last_name: {type: String, required:false},
    email: {type:String, required:true},
    gender: {type: String, required:true},
});

//step:-2 connect the schema with the users collection

const User = mongoose.model("user", userSchema);

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
const Post = mongoose.model("post", postSchema)//posts

//step:-1 create the schema for comments
const commentSchema = new mongoose.Schema({
    body : {type:String, required:true},
    post: {type: mongoose.Schema.Types.ObjectId, ref:"post", required: true},
},{
    versionKey:false, //V
    timestamps:true //created at updated at
})

//step:-2 connect the shema with the comments collection
const Comment = mongoose.model("comment",commentSchema)//comments

//step:-1 create the schema for tags
const tagSchema = new mongoose.Schema({
    name :{type:String, required:true}
},{
    versionKey:false, //V
    timestamps: true //created at updated at
})

//step:-2 connect the shema with the tags collection

const Tag = mongoose.model("tag", tagSchema)

const app = express();
app.use(express.json());

//-----------CRUD APIS for users-------------
//post:- create users
app.post("/users", async (req, res)=>{
    const user = await User.create(req.body)//db.users.insert()
    return res.status(201).send({user});

})


//get:- get all users

app.get("/users", async (req,res)=>{
    const users = await User.find().sort({id:-1}).lean().exec()//db.users.find()  //thennable => promise
    return res.status(200).send({users});
})

//patch:- update the users

app.patch("/users/:id", async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}) //db.user.update({_id:" "},{$set:{}})
    return res.status(200).send({user});
} )


//delete: delete a single user

app.delete("/users/:id" , async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id) //db.users.remove({_id:""})
    return res.status(200).send({user});
})

//getting a single user
app.get("/users/:id", async(req, res)=>{
    const users = await User.findById(req.params.id).lean().exec()  //db.users.findOne({_id:" "})

    return res.status(200).send({users});
})

//get all posts of a user
app.get("/users/:id/posts", async(req,res)=>{
    const posts = await Post.find({author: req.params.id}).populate("author").lean().exec();
    const author =await User.findById(req.params.id).lean().exec();
    return res.status(200).send({posts, author});

})

//-----------CRUD APIS for posts-------------
//create the posts
app.post("/posts", async(req,res)=>{
    const post = await Post.create(req.body)
    return res.status(201).send({post});
})

//get all posts
app.get("/posts", async(req, res)=>{
    const posts = await Post.find().populate({
        path:'author',
        select: 'first_name'   
    }).populate("tags").lean().exec()
    return res.status(200).send({posts});
})


//getting a single post
app.get("/posts/:id", async(req, res)=>{
    const post = await Post.findById(req.params.id).lean().exec()
    return res.status(200).send({post});
})


//update the post
app.patch("/posts/:id", async(req, res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec()
    return res.status(200).send({post});
})

//delete a single post
app.delete("/posts/:id", async(req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).send({post});
})

//-----------CRUD APIS for comments-------------
//creating the comments
app.post("/comments", async(req, res)=>{
    const comment = await Comment.create(req.body)
    return res.status(201).send({comment});
})

//getting all comments
app.get("/comments", async(req, res)=>{
    const comments = await Comment.find().lean().exec()
    return res.status(200).send({comments});
})


//getting a single comment
app.get("/comments/:id", async(req, res)=>{
    const comment = await Comment.findById(req.params.id).lean().exec()
    return res.status(200).send({comment});
})

//update the comment
app.patch("/comments/:id", async(req, res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body,{new: true}).lean().exec()
    return res.status(200).send({comment});
})

//delete a comment
app.delete("/comments/:id", async(req, res)=>{
    const comment = await Comment.findByIdAndRemove(req.params.id).lean().exec() 
    return res.status(200).send({comment});
})


//-----------CRUD APIS for tags-------------
//creating the tags
app.post("/tags", async(req, res)=>{
    const tag = await Tag.create(req.body)
    return res.status(201).send({tag});
})

//getting all tags
app.get("/tags", async(req, res)=>{
    const tags = await Tag.find().lean().exec()
    return res.status(200).send({tags});
})

//update the tag
app.patch("/tags/:id", async(req, res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body,{new: true}).lean().exec()
    return res.status(200).send({tag});
})

//delete a tag
app.delete("/tags/:id", async(req, res)=>{
    const tag = await Tag.findByIdAndRemove(req.params.id)
    return res.status(200).send({tag});
})

//getting a single tag
app.get("/tags/:id", async(req, res)=>{
    const tag = await Tag.findById(req.params.id).lean().exec()
    return res.status(200).send({tag});
})


app.listen(2345, async function(){
    await connect();
    console.log("listening on port");
});