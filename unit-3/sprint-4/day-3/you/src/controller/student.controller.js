const express = require("express");
const Student = require("../model/student.model");


const crudController = require("./crud.controller");
const { route } = require("./evaluation.controller");

const router = express.Router();

//--------------CRUD apis----------
//post a user
router.post("", crudController.post(Student));

//getting all users
//router.get("", crudController.get(Student));

router.get("",crudController.getstudent(Student));

//getting a single user
router.get("/:id", crudController.getOne(Student));

//updating a single user
router.patch("/:id", crudController.patch(Student));

//deleting a single user
router.delete("/:id", crudController.deleteOne(Student));

module.exports = router;

