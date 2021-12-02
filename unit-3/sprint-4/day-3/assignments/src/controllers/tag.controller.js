
const express = require("express");
const Tag = require("../models/tag.model");
const crudController= require("./crud.controller");
const router = express.Router();
//-----------CRUD APIS for tags-------------
//creating the tags

router.post("", crudController.post(Tag));

router.get("",crudController.get(Tag));

router.get("/:id",crudController.gettingOne(Tag));

router.patch("/:id",crudController.patch(Tag));

router.delete("/:id",crudController.deleteOne(Tag));

module.exports = router;

//router.post("", async(req, res)=>{
  //  const tag = await Tag.create(req.body)
    //return res.status(201).send({tag});
//})

//getting all tags

/*
router.get("", async(req, res)=>{
    const tags = await Tag.find().lean().exec()
    return res.status(200).send({tags});
})*/

//update the tag
/*
router.patch("/:id", async(req, res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body,{new: true}).lean().exec()
    return res.status(200).send({tag});
})*/

//delete a tag
/*
router.delete("/:id", async(req, res)=>{
    const tag = await Tag.findByIdAndRemove(req.params.id)
    return res.status(200).send({tag});
})*/

//getting a single tag
/*router.get("/:id", async(req, res)=>{
    const tag = await Tag.findById(req.params.id).lean().exec()
    return res.status(200).send({tag});
})*/

