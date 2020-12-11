const express = require("express");
const mongoose = require("mongoose");


const app = express();


mongoose.connect('mongodb://localhost:27017/RoyalEnfield', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DataBase Connected");
}).catch(err=>{
    console.log("Error : "+ err);
})


app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    phone:Number
})
const User = mongoose.model("User", userSchema);



app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/login.html");
})
app.get("/home", (req, res)=>{
   res.sendFile(__dirname+"/homepage.html");
})

app.get("/signin", (req, res)=>{
    res.sendFile(__dirname+"/signin.html");

})


app.post("/login", (req, res)=>{
    User.findOne({email: req.body.user, password: req.body.pass}).then((data)=>{
        if(data){
            res.redirect("/home"); 
        }else{
            res.redirect("/signin");
        }
    }).catch(err=>{
        console.log(err)
        res.redirect("/");
    })
})
app.post("/signin", (req, res)=>{
    var data = {
        name: req.body.name,
        email:  req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phone : req.body.phone
        
    }
    if(data.password === req.body.confirm_password){
        var user = new User(data);
        user.save();
        res.redirect("/")
    }else{
        res.redirect("/signin");
    }
})


app.listen(8000, ()=>{
    console.log("Server listening to 8000");
})