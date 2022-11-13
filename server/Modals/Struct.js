const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    Department:{
        type:String,
        required:true
    },
    Rollno:{
        type:String,
        required:true
    },
    Section:{
        type:String
    },
    Regulation:{
        type:Number
    },
    Option:{
        type:String
    },
    Date:{
        type:String
    },
    Period:{
        type:String
    },
})
const Data = mongoose.model("Details",DataSchema);
module.exports=Data;