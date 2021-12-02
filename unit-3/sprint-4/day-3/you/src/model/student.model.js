const mongoose = require("mongoose");

//step:-1 creating the schema

const studentSchema = new mongoose.Schema({
    roll_id :{type: Number, required:true},
    curr_batch: {type: String, required: true},
    eval_id:{ type:mongoose.Schema.Types.ObjectId, ref:"eval", required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}
});

//step:-2 connect the schema with the students collection

const Student = mongoose.model("student", studentSchema);

module.exports = Student;