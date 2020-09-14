const mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
	userName :{ type: 'string', required : true},
	email :{ type: 'string', required: true},
	passward : {type: 'string', required : true},
	birthDate : {type: 'string', requited: true},
	userfolder: {type : String},
	images :[
		{imageurl: {type : String}}
	]
});

// hash the password
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.passward);
  };

mongoose.model("user",userSchema);
 
