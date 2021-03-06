const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const {register, login, NewToken} = require("./controllers/auth.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

const start = async() => {
    await connect();

    app.listen(2335, () => {
        console.log("Listening to the port 2335");
    })
}

module.exports = start;