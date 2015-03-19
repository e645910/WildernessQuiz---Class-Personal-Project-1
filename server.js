var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wildernessQuiz');

// Routing =======================
var User = require('./api/models/authModel');
var AuthCtrl = require('./api/controllers/authCtrl');
var ProfileCtrl = require('./api/controllers/profileCtrl');
var QuestionCtrl = require('./api/controllers/questionCtrl');
var QuizCtrl = require('./api/controllers/quizCtrl');

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
app.use(session({secret: 'GROUPSEEKRIT', 
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
// pagination ==============================
var Quiz = require('./api/models/questionModel');
var q = require('q');

app.get('/api/quizer', function(req, res){

	//pagination
	var limit = req.query.limit || 10;
	var skip = req.query.skip || 0;

	//we'll warp the count call in a promise (that way, we can parallelize it with the Post find)
	var countFunction = function(){
		var dfd = q.defer();
		Quiz.count(function(err, count){
			dfd.resolve(count);
		});
		return dfd.promise;
	};

	//call both these promises in parallel, (counting and finding)
	q.all([
		countFunction(),
		Quiz
			.find()
			.limit(limit)
			.skip(skip)
			.sort('createdAt')
			.exec()

		]).spread(function(count, quizer){
			return res.json({
				quizer: quizer,
				total_quizer: count
			});
	});

	//simpler version of just finding (without count)
	// Post
	// 	.find()
	// 	.limit(limit)
	// 	.skip(skip)
	// 	.sort('-createdAt')
	// 	.exec()
	// ]).spread(function(count, posts) {
	// 	return res.json(posts);
	// });
});

// Endpoints =============================== 
app.get('/api/auth', AuthCtrl.authenticate);

app.get('/api/getProfile', ProfileCtrl.get);
app.post('/api/postProfile', ProfileCtrl.post);

app.post('/api/postQuestion', QuestionCtrl.post);
app.get('/api/getQuestion', QuestionCtrl.get);

app.get('/api/getQuiz', QuizCtrl.get);
app.listen(8000);