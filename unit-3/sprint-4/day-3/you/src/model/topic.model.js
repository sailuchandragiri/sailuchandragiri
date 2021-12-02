const mongoose = require("mongoose");

//step:-1 creating a schema

const topicSchema = new mongoose.Schema({
    topic_name:{type:String, required:true},
    topic_body: {type: String, required: true}
});

//step:-2 connect the schema with the topics collections

const Topic = mongoose.model("topic", topicSchema);

module.exports= Topic;