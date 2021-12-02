const express = require("express");

const router = express.Router();

const authorize = require("../middl/auth.middlewars");

const Lecture = require("../models/student.model");

router.post("", authorize['student','instructor'] async(req, res)=> {
    const student = await Lecture.create(req.body);
    return res.status(201).send({student});
})

router.get("", async(req, res)=> {
    const student = await Lecture.find({}).populate("student_id").lean().exec();
    return res.status(200).send({student});
})

router.patch("/:id", async(req, res)=> {
    const student = await Lecture.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({student});
})

router.delete("/:id", async(req,res)=> {
    const student = await Lecture.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({student});
})

module.exports = router;