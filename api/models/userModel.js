var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var q = require('q');


var UserSchema = mongoose.Schema({
	name: {type: String, required: true},
	email: { type: String, required: true, unique: true },
	password: String,
	gender: String,
	age: Number,
	bio: String
});
//serial middleware excutes after next call
UserSchema.pre('save', function(next){
	//defines user as this 
	var user = this;
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) {
		return next();
	}
	 // generate a salt (rainbow fish attacks and resist brute force attacks)
	bcrypt.genSalt(12, function(err, salt){
		if(err) {
			return next(err);
		}
		//store hash number in the password DB	
		bcrypt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			return next();
		});
	}); 
});
 // now checks the password
UserSchema.methods.comparePassword = function(pass){
	//expose the associated Promise to signal a successful or unsuccessful check, as well as the status of the task
	var dfd = q.defer();
	// Loads hash from the password DB
	bcrypt.compare(pass, this.password, function(err, isMatch){
		if(err) {
			dfd.reject(err);
		}
		else {
			dfd.resolve(isMatch);
		}
	});
	return dfd.promise;
};

module.exports = mongoose.model('User', UserSchema);