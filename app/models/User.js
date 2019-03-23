const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: ObjectId,
    username: String,
    firstname: String,
    lastname: String,
    bike: String,
    feed: Object,
    posts: Array,
    reactions: Array
});

module.exports(mongoose.model("User", userSchema));