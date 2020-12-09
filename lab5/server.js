const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/bikes", (req, res)=>{
    res.sendFile(__dirname+"/bikes.html");
})

app.get("/signin", (req, res)=>{
    res.sendFile(__dirname+"/signin.html");

})

app.get("/rides", (req, res)=>{
    res.sendFile(__dirname+"/rides.html");

})
app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/login.html");

})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");

})
app.get("/shop_accessories/jackets_&_clothing", (req, res)=>{
    res.sendFile(__dirname+"/jackets.html");

})
app.get("/shop_accessories/RE_accessories", (req, res)=>{
    res.sendFile(__dirname+"/accessories.html");

})
app.listen(7000, ()=>{
    console.log("Server Started");
})