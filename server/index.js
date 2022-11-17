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
    const Purp = req.body.Purpose;
    const Date = req.body.Date;
    const Per = req.body.Period;

    const details = new Data({ Department: Dep.value, Rollno: Rno, Section: Sec, Purpose: Purp, Date: Date, Period: Per });

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

app.post("/view", async (req, res) => {
    const Rno = req.body.Rollno
    try {
        const details = await Data.find({ Rollno: Rno });
        res.json(details);
        console.log(details);
        res.end()
    }
    catch (err) {
        console.log(err);
    }
})

//delete

app.post("/delete", async (req, res) => {
    const Rno = req.body.Rollno;
    const Date = req.body.Date;
    const result = await Data.findOneAndDelete({ Rollno: Rno, Date: Date });
    console.log(result);
    console.log("deleted");
    res.end();
})

//update

app.put("/update", async (req, res) => {
    const Rno = req.body.Rollno;
    const Date = req.body.Date;
    const Per = req.body.Period;
    const Purp = req.body.Purpose;

    const result = await Data.findOneAndUpdate({ Rollno: Rno, Date: Date, Period: Per, Purpose: Purp });
    console.log(result);
    console.log("Updated");
    res.end();
})

//server
app.listen(3001, () => {
    console.log("Server running...");
});