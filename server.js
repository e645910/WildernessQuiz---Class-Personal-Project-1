var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/wildernessquiz');

passport.use(new localStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, 	function(username, password, done){
	User.findOne({ email: username }).exec().then(function(user){
		if(!user){
			return done(null, false);
		}
		user.comparePassword(password).then(function(isMatch){
			if(!isMatch){
				return done(null, false);
			}
			return done(null, user);
		});
	});
}));

passport.serializeUser(function(user, done){
	//input user model (mongoose)
	done(null, obj);
});
passport.deserializeUser(function(user, done){
	//user object (json)
	done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/api/auth', passport.authenticate('local'), function(req, res){
	//if auth was successful, this will happen
	return res.status(200).end();
});

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.use(session({secret: 'WILDSEEKRIT', 
	saveUninitialized: true,
    resave: true}));

app.post('/api/register', function(res, req){
	//creates a new user
	var newUser = new User(req.body);
	newUser.save(function(err, user){
		if(err) {
			return res.status(500).end();
		}
		return res.json(user);
	});
});

var isAuthed = function(req, res){
	if(!req.isAuthenticated()){
		return res.stataus(403).end();
	}
	return next();
};
var UserController = require('./api/controllers/userCtrl')










app.listen(8000);