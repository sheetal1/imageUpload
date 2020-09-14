const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const userModel = mongoose.model("user");

router.post("/register", (req,res)=>{
    // res.send("course Controller")
    console.log("request object",req.body);

    var userdetails = new userModel();
    userdetails.userName = req.body.username;
    userdetails.email = req.body.email;
    userdetails.passward = userdetails.generateHash(req.body.password);;
    userdetails.birthDate = req.body.birthdate;
    userdetails.userfolder = "user"+new Date().toISOString();
    userdetails.images = [];
    userdetails.save(function(error,doc){
        if(!error){
            console.log("registerd user rec",doc);
            res.send("user register succefully....");
        }else{
            res.send("error occured");
        }
    });
     
})

router.post("/login",(req,res)=>{
    console.log("request object of login",req.body);
    userModel.findOne({email: req.body.email}, function(err, user) {
        console.log("user",user);
        if (!user.validPassword(req.body.password)) {
            res.send("username & password wrong");
        } else {
            res.send("user loggin succefully");
        }
      });
})


router.post("/uplod")

module.exports =router;