const express = require("express");

const Comment = require("../models/comment.model");

//const router = express.Router();
const crudController= require("./crud.controller");

const router = express.Router();






//-----------CRUD APIS for tags-------------
//creating the tags

router.post("", crudController.post(Comment));

router.get("",crudController.get(Comment));

router.get("/:id",crudController.gettingOne(Comment));

router.patch("/:id",crudController.patch(Comment));

router.delete("/:id",crudController.deleteOne(Comment));

module.exports = router;
