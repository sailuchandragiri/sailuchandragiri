const mongoose = require("mongoose");

//step:-1 create the Schema

const jobSchema = new mongoose.Schema({
    id:{type:Number, required:true},
    title:{type:String, required:true},
    job_type :{type:String, required:true},
    work_place:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

//step-2 connect the schema with the jobs collections

const Job = mongoose.model("job", jobSchema);

module.exports = Job;