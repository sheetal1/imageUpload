const connection = require("./model");
const express = require("express");
const expressHandler = require("express-handlebars");
const path = require("path");
const { parse } = require("path");
const bodyParser = require("body-parser");
const application = express();



require("./model/index");
require("./model/user.model");
require("./model/usergallery.model");

const router = require('./routers/upload.router.js');
const userController = require("./controllers/user");

application.use('/', router);
application.use(bodyParser.urlencoded({
    extended : true 
}));

// application.get("/",(req,res)=>{
//     res.send('<h1>Hello world</h1>');
// })

application.use("/user",userController);

application.listen("8083",()=>{
    console.log("server started");
})