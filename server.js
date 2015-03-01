var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wildernessQuiz');

// Routing =======================
var User = require('./api/models/profileModel');
var AuthCtrl = require('./api/controllers/authCtrl');
var ProfileCtrl = require('./api/controllers/profileCtrl');
var QuestionCtrl = require('./api/controllers/questionCtrl');

// Middleware =========================
passport.use(new localStrategy({
	//require the defualt username to be the person's email address 
	usernameField: 'email',
	passwordField: 'password'
}, 	function(username, password, done){
	User.findOne({ email: username }).exec().then(function(user){
		if(!user){
			return done(null, false, { message: 'Incorrect username.' });
		}
		user.comparePassword(password).then(function(isMatch){
			if(!isMatch){
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		}, function(err){
			console.log(err)
		});
	}, function(err){
		return done(err);
	});
}));

passport.serializeUser(function(user, done){
	//input user model (mongoose)
	done(null, user);
});
passport.deserializeUser(function(obj, done){
	//user object (json)
	done(null, obj);
});

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(session({secret: 'WILDSEEKRIT', 
	saveUninitialized: true,
    resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Authentication ========================
app.post('/api/auth', passport.authenticate('local'), function(req, res){
	//if auth was successful, this will happen
	return res.status(200).end();
});
app.post('/api/register', function(req, res) {
	//create a user
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err) {
			return res.status(500).end();
		}
		return res.json(user);
	});
});


// --------- doesn't appear to be working
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(403).end();
	}
	return next();
};

// Endpoints =============================== 
app.get('/api/auth', AuthCtrl.profile);
app.get('/api/getProfile', ProfileCtrl.get);
app.post('/api/postProfile', ProfileCtrl.post);

app.post('/api/postQuestion', QuestionCtrl.post);
app.get('/api/getQuestion', QuestionCtrl.get);


app.listen(8000);