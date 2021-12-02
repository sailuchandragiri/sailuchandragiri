const express = require("express");
const { models } = require("mongoose");

const Skill = require("../models/skill.model");

const crudController = require("./crud.controller");

const router = express.Router();

//-------------CRUD apis for skills--------------
//create a skill
router.post("", crudController.post(Skill));

//getting all skills
router.get("",crudController.get(Skill));

//geting a single skill
router.get("/:id", crudController.getOne(Skill));

//updatig a skill
router.patch("/:id", crudController.patch(Skill));

//deleting a skill
router.delete("/:id", crudController.deleteOne(Skill));

module.exports = router;