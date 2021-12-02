const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    roll_no: {type:Number, required: true},
    student_id: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    batch: {type: String, required: true}

})

const Stud = mongoose.model('student', studentSchema);

module.exports = Stud;