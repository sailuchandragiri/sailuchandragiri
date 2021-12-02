

const mongoose = require("mongoose");

//step-1: creating the city schema

const citySchema = new mongoose.Schema({
    place_name :{type:String, required:true},
    pincode:{type:Number, required:true},
    state:{type:String, required:true},
    job_id:{type:mongoose.Schema.Types.ObjectId, ref:"job", required:true}
},{
    versionKey:false,
    timestamps:true
})

//step-2: connecting the schema with the city collections

const City = mongoose.model("city", citySchema);

module.exports = City;

