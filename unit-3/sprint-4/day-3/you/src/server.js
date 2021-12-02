const express = require("express");
const { PromiseProvider } = require("mongoose");

const connect = require("./config/db");

//Controllers


const evalController = require("./controller/evaluation.controller");
const studentController = require("./controller/student.controller");
const topicController = require("./controller/topic.controller");
const userController = require("./controller/user.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/evals", evalController);
app.use("/students", studentController);
app.use("/topics", topicController);

app.listen(2345, async function(){
    await connect();
    console.log("Listening to the port");
});