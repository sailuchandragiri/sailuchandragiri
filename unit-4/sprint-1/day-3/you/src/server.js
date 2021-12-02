const express = require('express');
const app = express();
app.use(express.json());
const connect = require("./configs/db");

const userController = require('./controllers/user.controller');
const adminController = require('./controllers/admin.controller');

app.use("/users", userController);
app.use("/admins", adminController);



const start = async() => {

    await connect();

    app.listen(2367, () => {
        console.log("listening on the port 2367");
    })
}

module.exports = start;