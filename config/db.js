const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mDB");
        console.log("Mongo DB connected");
    }
    catch(err){
        console.log("DB error : ",err);
        process.exit(1);
    }
};

module.exports = connectDB;