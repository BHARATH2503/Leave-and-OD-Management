const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Data = require("./Modals/Struct")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://user1419:USER1419@React.pafft8i.mongodb.net/LeaveOD?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

//insert
app.post("/add", async (req, res) => {

    const Dep = req.body.Department;
    const Rno = req.body.Rollno;
    const Sec = req.body.Section;
    const Reg = req.body.Regulation;
    const Purp = req.body.Option;
    const Date = req.body.Date;
    const Per = req.body.Period;

    const details = new Data({ Department: Dep.value, Rollno: Rno, Section: Sec, Regulation: Reg, Option: Purp, Date: Date, Period: Per });

    try {
        await details.save();
        res.status(200).send("Inserted");
        console.log(details, "\nAdded");
        res.end();
    }
    catch (err) {
        console.log(err);
    }
})

//view

app.post("/view", async (req,res)=>{
    const Rno = req.body.Rollno
    try
    {
        const details = await Data.find({Rollno:Rno});
        res.json(details);
        console.log(details);
        res.end()
    }
    catch(err)
    {
        console.log(err);
    }
})

//server
app.listen(3001, () => {
    console.log("Server running...");
});