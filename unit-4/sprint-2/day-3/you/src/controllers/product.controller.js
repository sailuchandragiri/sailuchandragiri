const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

const redis = require("../configs/redis");

router.get("", (req, res) => {
    redis.get("products", async function(err, prod){
        console.log("forecasts", prod);
        
        if(err) console.log(err);

        if(prod) return res.status(200).send({prod: JSON.parse(prod)});

        const products = await Product.find().lean().exec();

        redis.set("products", JSON.stringify(products));

        return res.status(200).send({prod: products});
    })
   
})

router.post("", async function(req, res){
    const product = await Product.create(req.body);

    const products = await Product.find().lean().exec();

    redis.set("products", JSON.stringify(products));

    return res.status(201).send(product);
})

//product

router.get("/:id", (req, res) => {
    redis.get(`products.${req.params.id}`, async(err, prod) => {

        if(err) console.log(err);

        if(prod) return res.status(200).send({cached_prod: JSON.parse(prod)});

        const product = await Product.findById(req.params.id).lean().exec();

        redis.set(`products.${req.params.id}`, JSON.stringify(product));

        return res.status(200).send({db_prod: product})
    })
})

router.patch("/:id", async(req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

    redis.set(`products.${req.params.id}`, JSON.stringify(product));

    const products = await Product.find().lean().exec();

    redis.set("products", JSON.stringify(products));

    return res.status(201).send(product);
})

router.delete("/:id", async(req, res) =>{
    const product = await Product.findByIdAndDelete(req.params.id);

    redis.del(`products.${req.params.id}`);

    const products = await Product.find().lean().exec();

    redis.set("products", JSON.stringify(products));

    return res.status(200).send(product);
} )

module.exports = router;