const express = require("express");

const User = require("../model/user.model");

const crudController = require("./crud.controller");

const router = express.Router();

//--------------CRUD apis----------
//post a user
router.post("", crudController.post(User));

//getting all users
router.get("", crudController.get(User));

//getting a single user
router.get("/:id", crudController.getOne(User));

//updating a single user
router.patch("/:id", crudController.patch(User));

//deleting a single user
router.delete("/:id", crudController.deleteOne(User));

module.exports = router;





