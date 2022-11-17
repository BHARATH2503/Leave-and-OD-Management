const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    Department: {
        type: String,
        required: true,
    },
    Rollno: {
        type: String,
        required: true,
    },
    Section: {
        type: String,
        required: true,
    },
    Purpose: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    Period: {
        type: String,
        required: true,
    },
})
const Data = mongoose.model("Details", DataSchema);
module.exports = Data;