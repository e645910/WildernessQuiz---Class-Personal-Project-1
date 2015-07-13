//node modules ========================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var app = express();

//heroku mongodb connection via mongoose ===========
var http = require ('http');	     // For serving a basic web page.
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/wildernessQuiz';

var http = require ('http');	     // For serving a basic web page.
var mongoose = require ("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/wildernessQuiz';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});


// Routing ============================
var User = require('./api/models/authModel');
var AuthCtrl = require('./api/controllers/authCtrl');
var QuestionCtrl = require('./api/controllers/questionCtrl');
var QuizCtrl = require('./api/controllers/quizCtrl');
var AnswerCtrl = require('./api/controllers/answerCtrl');

// Middleware =========================
passport.use(new localStrategy({
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
	done(null, user);
});
passport.deserializeUser(function(obj, done){
	done(null, obj);
});

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(session({secret: 'GROUPSEEKRIT', 
	saveUninitialized: true,
    resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Authentication =====================
app.post('/api/auth', passport.authenticate('local'), function(req, res){
	return res.status(200).json(req.user._id);
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

// Endpoints ==========================
app.get('/api/auth', AuthCtrl.authenticate);

app.get('/api/getQuestion', QuestionCtrl.get);
app.post('/api/saveQuestion', QuestionCtrl.post);
app.put('/api/updateQuestion', QuestionCtrl.put);

app.get('/api/getQuiz', QuizCtrl.get);

app.get('/api/getAnswer', AnswerCtrl.get);
app.post('/api/saveAnswer', AnswerCtrl.post);

app.listen(process.env.PORT || 5000)