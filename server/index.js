const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const EmpModel = require("./models/Employes");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.p9ico.mongodb.net/empDB?retryWrites=true&w=majority").then(()=>{
    console.log("DB CONNECTED");
}).catch((e)=>{
    console.log("No DB CONNECTED");
});


// insert
app.post("/add_emp", async (req, res) => {
    // const emp = new EmpModel({ name: "Jessic", age: 38, email:"x@gmail.com" });
    // await emp.save();
    // res.send("Inserted DATA");
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    const emp = new EmpModel({ name: name, age: age, email:email});
    await emp.save();
    res.send("Inserted DATA");
  });

// read
app.get("/read", async (req, res) => {
    EmpModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

//   edit
app.put("/edit", async (req, res) => {

    const id = req.body.id;
    const newName = req.body.newName;
    const newAge = req.body.newAge;
    const newEmail = req.body.newEmail;

    try{
        await EmpModel.findById(id,(error, EmpToUpdate)=>{

            EmpToUpdate.name = newName;
            EmpToUpdate.age = Number(newAge);
            EmpToUpdate.email = newEmail;

            EmpToUpdate.save()

        })
    }
    catch(err){
        console.log(err)
    }

    res.send("Updated");

  });

// delete
app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    await EmpModel.findByIdAndDelete(id).exec();
    res.send("Item deleted");
})

app.listen(3001, () => {
    console.log("You are connected!");
  });