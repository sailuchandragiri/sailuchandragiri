const express  = require("express");

const app = express();

//const multer = require('multer');

app.use(express.json());

//const productController = require("./controllers/product.controller");

//app.use("/products", productController);

const userController = require('./controllers/user.controller');
const AdminController = require('./controllers/admin.controller');

app.use("/users", userController);
app.use("/admins", AdminController);


module.exports = app;