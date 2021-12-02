const express = require("express");

const City = require("../models/city.model");

const crudController = require("./crud.controller");
const router = express.Router();

//-----------CRUD apis for cities-------------

//create a city
router.post("", crudController.post(City));

//getting all city
router.get("", crudController.get(City));

//update a city
router.patch("/:id", crudController.patch(City));

//delete a city 
router.delete("/:id",crudController.deleteOne(City));

router.get("/:pincode", crudController.newf(City));


//getting a city
router.get("/:id", crudController.getOne(City));


module.exports = router;
