const express = require("express");
//const mongoose  = require("mongoose");
const connect = require("./configs/db")
/*
const User = require("./models/user.model")
const Post = require("./models/post.model")
const Comment = require("./models/comment.model")
const Tag = require("./models/tag.model")
*/
const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller");
const tagController = require("./controllers/tag.controller")
const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/posts",postController);
app.use("/comments",commentController);
app.use("/tags", tagController);

app.listen(2345, async function(){
    await connect();
    console.log("listening on port");
});