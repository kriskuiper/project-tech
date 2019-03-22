const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const feedPostSchema = new Schema({
    _id: ObjectId,
    title: String,
    author: String,
    contents: String,
    kms: Number,
    bike: String,
    location: String,
    pictures: Array
});


module.exports = mongoose.model("FeedPost", feedPostSchema);