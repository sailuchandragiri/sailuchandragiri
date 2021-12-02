const express = require("express");
const Topic = require("../model/topic.model");


const crudController = require("./crud.controller");

const router = express.Router();

//--------------CRUD apis----------
//post a user
router.post("", crudController.post(Topic));

//getting all users
router.get("", crudController.get(Topic));

//getting a single user
router.get("/:id", crudController.getOne(Topic));

//updating a single user
router.patch("/:id", crudController.patch(Topic));

//deleting a single user
router.delete("/:id", crudController.deleteOne(Topic));

module.exports = router;

