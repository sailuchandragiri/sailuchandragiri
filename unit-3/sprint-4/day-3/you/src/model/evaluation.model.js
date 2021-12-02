const mongoose = require("mongoose");

// step:-1 creating a schema

const evalSchema = new mongoose.Schema({
    date_of_eval: {type: String, required:true},
    instructor: {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    topic_name: {type:mongoose.Schema.Types.ObjectId, ref:"topic", required:true}
    
});

//step:-2 connect the schema with the evaluations collection

const Evaluation = mongoose.model("eval", evalSchema);

module.exports = Evaluation;