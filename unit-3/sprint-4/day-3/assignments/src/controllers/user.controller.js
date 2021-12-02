
const express = require("express");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const crudController= require("./crud.controller");
const router = express.Router();
//-----------CRUD APIS for users-------------
//post:- create users
router.post("",crudController.post(User));
//get:- get all users
router.get("",crudController.get(User));
//patch:- update the users
router.patch("/:id", crudController.patch(User));
//delete: delete a single user
router.delete("/:id" , crudController.deleteOne(User));
//getting a single user
router.get("/:id", crudController.gettingOne(User));
//get all posts of a user
router.get("/:id/posts", async(req,res)=>{
    const posts = await Post.find({author: req.params.id}).populate("author").lean().exec();
    const author =await User.findById(req.params.id).lean().exec();
    return res.status(200).send({posts, author});

})

module.exports = router;