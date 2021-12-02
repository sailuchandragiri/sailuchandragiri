const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    title: {type: String, required: true},
    instructor_id: {type: mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    batch:{type:String, required: true}
})

const Lect = mongoose.model("lecture", lectureSchema);

module.exports = Lect;

