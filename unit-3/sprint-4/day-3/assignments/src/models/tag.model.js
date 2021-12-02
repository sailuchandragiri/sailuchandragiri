
const mongoose = require('mongoose');

//step:-1 create the schema for tags
const tagSchema = new mongoose.Schema({
    name :{type:String, required:true}
},{
    versionKey:false, //V
    timestamps: true //created at updated at
})

//step:-2 connect the shema with the tags collection

module.exports = mongoose.model("tag", tagSchema)