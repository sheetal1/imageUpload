const mongoose = require("mongoose");
const mongoConnectionString = "mongodb+srv://connAdmin:oNYukPYRhNLEwKLd@connvertex.hy3rz.mongodb.net/imageUpload?authSource=admin&replicaSet=atlas-ebqvnh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(mongoConnectionString,{ useNewUrlParser: true , useUnifiedTopology: true},(error)=>{
	if(!error)
	{
		console.log("success connected");
	}
	else{
		console.log("Error connecting to database.")
	}
});

const user = require("./user.model");
const usergallery = require("./usergallery.model");