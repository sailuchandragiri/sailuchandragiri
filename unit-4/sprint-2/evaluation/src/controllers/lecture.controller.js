const express = require("express");

const router = express.Router();

const Lecture = require("../models/lecture.model");

router.post("", async(req, res)=> {
    const lecture = await Lecture.create(req.body);
    return res.status(201).send({lecture});
})

router.get("", async(req, res)=> {
    const lecture = await Lecture.find({}).populate("instructor_id").lean().exec();
    return res.status(200).send({lecture});
})

router.patch("/:id", async(req, res)=>{
    const lecture = await Lecture.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({lecture});
})

router.delete("/:id", async(req, res)=>{
    const lecture = await Lecture.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({lecture});
})

module.exports = router;