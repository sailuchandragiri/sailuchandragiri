const express = require("express");

const connect = require("./config/db");

const cityController = require("./controllers/city.controller");
const jobController = require("./controllers/job.controller");
const skillController = require("./controllers/skill.controller");

const app = express();
app.use(express.json());

app.use("/citys", cityController);
app.use("/jobs", jobController);
app.use("/skills", skillController);

app.listen(2333, async function(){
    await connect();
    console.log("Listening on port");
});