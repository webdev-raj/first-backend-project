const mongoose = require("mongoose");

const postsSeheme = new mongoose.Schema({
    imageUrl:String,
    caption:String,
})

const postsModel = mongoose.model("post",postsSeheme)

module.exports = postsModel;