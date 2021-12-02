const express = require("express");
const Post = require("../models/post.model")
//const Comment = require("../models/comment.model");
const crudController= require("./crud.controller");
const router = express.Router();
//-----------CRUD APIS for posts-------------
//create the posts
router.post("", crudController.post(Post));

//get all posts
router.get("", async(req, res)=>{
    const posts = await Post.find().populate({
        path:'author',
        select: 'first_name'   
    }).populate("tags").lean().exec()
    return res.status(200).send({posts});
})


//getting a single post
router.get("/:id", crudController.gettingOne(Post));


//update the post
router.patch("/:id",crudController.patch(Post));

//delete a single post
router.delete("/:id", crudController.deleteOne(Post));

module.exports = router;