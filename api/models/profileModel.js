var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var q = require('q');

var ProfileSchema = mongoose.Schema({
	fullName: {type: String, required: true},
	email: { type: String, required: true, unique: true },
	password: String,
	gender: String,
	age: Number,
	bio: String
});
//mongose serial middleware excutes after next call
ProfileSchema.pre('save', function(next){
	//defines user as this keyword 
	var user = this;
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) {
		return next();
	}
	 // generate a salt factor 10 (prevents rainbow fish attacks and resist brute force attacks)
	bcrypt.genSalt(12, function(err, salt){
		if(err) {
			return next(err);
		}
		// hash the password along with our new salt
		bcrypt.hash(user.password, salt, function(err, hash){
			if(err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			return next();
		});
	}); 
});
 // now checks the password
ProfileSchema.methods.comparePassword = function(pass){
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

module.exports = mongoose.model('Profile', ProfileSchema);