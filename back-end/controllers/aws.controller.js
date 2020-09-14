const express = require("express");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var stream = require('stream');
const userModel = mongoose.model("user");


 
const s3 = require('../config/s3.config.js');
 
exports.doUpload = (req, res) => {
	var userIDreq = mongoose.Types.ObjectId(req.body.userID);
	userModel.findOne({ _id: userIDreq },function(err,user){
		if(!err){
			console.log("user documernt",user)
			const s3Client = s3.s3Client;
			const params = s3.uploadParams;
			
			params.Key = user.userfolder+"/"+req.file.originalname;
			params.Body = req.file.buffer;
				
			s3Client.upload(params, (err, data) => {
				if (err) {
					res.status(500).json({error:"Error -> " + err});
				}else{
					var query = 
					userModel.updateOne({ _id: userIDreq },
								{ $push: { "images":{"imageurl":req.file.originalname} } }, function (err, result) {
									if(!err){
										res.send({message: 'File uploaded successfully! -> keyname = ' + req.file.originalname});
									}else{
										res.send({message: 'error occured'});
									}
								});
					
				}
				
			});
		}else{
			console.log("error occured",err)
		}
	})
	// const s3Client = s3.s3Client;
	// const params = s3.uploadParams;
	
	// params.Key = userFolder+"/"+req.file.originalname;
	// params.Body = req.file.buffer;
		
	// s3Client.upload(params, (err, data) => {
	// 	if (err) {
	// 		res.status(500).json({error:"Error -> " + err});
	// 	}else{
	// 		res.send({message: 'File uploaded successfully! -> keyname = ' + req.file.originalname});
	// 	}
		
	// });
}