const express  = require("express");

const app = express();

const multer = require('multer');

app.use(express.json());

const productController = require("./controllers/product.controller");

app.use("/products", productController);

module.exports = app;