const express = require("express");
const Evaluation = require("../model/evaluation.model");


const crudController = require("./crud.controller");

const router = express.Router();

//--------------CRUD apis----------
//post a user
router.post("", crudController.post(Evaluation));

//getting all users
router.get("", crudController.get(Evaluation));

//getting a single user
router.get("/:id", crudController.getOne(Evaluation));

//updating a single user
router.patch("/:id", crudController.patch(Evaluation));

//deleting a single user
router.delete("/:id", crudController.deleteOne(Evaluation));

module.exports = router;

