const express = require("express");
//const { route } = require("../../../day-3/assignments/src/controllers/user.controller");

const Job = require("../models/job.model");

const crudController = require("./crud.controller");

const router = express.Router();

//--------------CRUD apis for jobs-----------

//create a job
router.post("",crudController.post(Job));

//gettig all jobs
router.get("",crudController.get(Job));

//get a single job
router.get("/:id", crudController.getOne(Job));

//update a job
router.patch("/:id", crudController.patch(Job));

//delete a job
router.delete("/:id", crudController.deleteOne(Job));


module.exports = router;