const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Data = require("./Modals/Struct")
app.use(express.json());

mongoose.connect("mongodb+srv://user1419:USER1419@React.pafft8i.mongodb.net/LeaveOD?retryWrites=true&w=majority" ,{
    useNewUrlParser:true,
});

//insert
app.get("/add",async(req,res)=>{

    const details =new Data({Department:"IT",Rollno:"20ITR014",Section:"A",Regulation:2020,Option:"LEAVE",Date:"10.11.2022",Period:"1-8"});

    try{
        await details.save();
        res.status(200).send("Inserted");
        console.log(details,"\nAdded");
        res.end();
    }
    catch(err)
    {
        console.log(err);
    }
})

//server
app.listen(3001,()=>{
    console.log("Server running...");
});