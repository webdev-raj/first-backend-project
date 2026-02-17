const mongoose = require("mongoose");

const connectDB = async ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB");
}

module.exports = connectDB