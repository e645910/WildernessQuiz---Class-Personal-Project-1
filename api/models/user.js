var mongoose = require('mongoose');
var bcyrpt = require('bcrypt');
var q = require('q');

var schema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: String,
	gender: String,
	age: Number
});
//serial middleware excutes after next call
schema.pre('save' function(next){
	//defines user as this 
	var user = this;
		if (!user.isModified) {
			return next();
		} //hashes a password -- bcrypt uses hash to help to incrypt the password (hash returns a numerical number from a string)
	bcyrpt.genSalt(12, function(err, salt){
			return next(err);
		} //store hash in the password DB
	bycrpt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			return next();
	});
	})
})