const mongoose = require("mongoose"),Schema = mongoose.Schema;

var userGallery = new mongoose.Schema({
	userID: {type : Schema.ObjectId, requird :true},
	userfolder: {type : String, required :true},
	images :[
		{imageurl: {type : String}}
	]
})

mongoose.model("usergallery",userGallery);

 