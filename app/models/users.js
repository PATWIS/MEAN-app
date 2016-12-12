const mongoose = require("mongoose");


var schema = new mongoose.Schema({

	name: String,
	lastName: String

});

// constructor 
var User = mongoose.model("User", schema);


function addUser(userData, callback) {
	
	 var user = new User(userData);

	 user.save(function(err, user) {

	 	if(err) {
			callback(err);
		} else {
			callback(null, user);
		}

	 });
}

function getUser(id, callback) {

	
	User.findById(id).exec(function(err, user) {

		if(err) {
			callback(err);
		} else {
			callback(null, user);
		}
	})
}

function updateUser(userData, callback) {

	// console.log(id);
	var id = userData.id;

	delete userData.id;

	User.findByIdAndUpdate(id, userData).exec(function(err, user) {
		if(err) {
			callback(err);
		} else {
			callback(null, user);
		}
	})
}

function deleteUser(id, callback) {

	User.findByIdAndRemove(id).exec(function(err, user) {

		if(err) {
			callback(err);
		} else {
			callback(null, user);
		}
	})
}

function listUsers(callback) {

	// wywołania asynchroniczne

	//query
	User.find({}).exec(function(err, users) {

		if(err) {
			callback(err);
		} else {
			callback(null, users);
		}

	})


}

module.exports = {
	add: addUser,
	get: getUser,
	update: updateUser,
	delete: deleteUser,
	list: listUsers
};