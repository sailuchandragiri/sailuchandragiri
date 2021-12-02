
const mongoose = require("mongoose");

//step:1 Creating a schema

const skillSchema = new mongoose.Schema({
    name:{type:String, required:true},
    body:{type:String, required:true},
    job_id:{type:mongoose.Schema.Types.ObjectId, ref:"job", required:true}
},{
    versionKey:false,
    timestamps:true
})

//step-2 connecting the schema with the skills collection
const Skill = mongoose.model("skill", skillSchema);

module.exports = Skill;