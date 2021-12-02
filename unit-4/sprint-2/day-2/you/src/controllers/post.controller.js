const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize');

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authenticate, authorize(["user", "admin"]), async function(req, res) {
    const products = await Product.find().lean().exec();
    const user = req.user;

    delete user.password
    return res.send({ products, user })
})

router.post("", async(req, res) => {
    const product = await Product.create(req.body);

    return res.status(201).send({ product })
})

router.patch("/:id", async(req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ product });
})
module.exports = router;