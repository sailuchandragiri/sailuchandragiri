
const express = require('express');
const router = express.Router();

const upload = require('../utils/files_upload.utils');

const productModel = require("../models/product.model");


router.post("", upload.single("productImages"), async(req, res) => {
    const product = await productModel.create({
        product_name: req.body.product_name,
        price: req.body.price,
        image_url: req.file.path,
    })
    res.status(201).json({ data: product });
})

router.post("/multiple", upload.array("productImages"), async(req, res) => {
    const files = req.files.map(file => file.path)
    const product = await productModel.create({
        product_name: req.body.product_name,
        price: req.body.price,
        image_url: req.files,
    })
    res.status(201).json({ data: product });
})


module.exports = router;