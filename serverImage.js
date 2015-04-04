/**
 * Module dependencies
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

// var QuestionCtrl = require('./api/controllers/questionCtrl'); 
// img path
var imgPath = 'public/img/1-Backpack.jpg';
 
// connect to mongo
mongoose.connect('mongodb://localhost/wildernessQuiz');
 
// example schema
var mongoose = require('mongoose');

var schema = mongoose.Schema({
  img: { data: Buffer, contentType: String }
});

// our model
module.exports = mongoose.model('Image', schema);
 
// mongoose.connection.on('open', function () {
//   console.error('mongo is open');
 
  // empty the collection
   // A.remove(function (err) {
  //   if (err) throw err;
 
  //   console.error('removed old docs');
 
    // store an img in binary in mongo
    var a = new module.exports;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'jpg';
    a.save(function (err, a) {
      if (err) throw err;
 
      console.error('saved img to mongo');


// retrieve the image
// app.get('/api/getQuestion', QuestionCtrl.get);


  app.get('/api/getImage', function (req, res) {
    module.exports.findById(a, function (err, doc) {
      if (err) return next(err);
      res.contentType(doc.img.contentType);
      res.send(doc.img.data);
    });
  });
 
      app.listen(3333, function (err) {
      });

    });
  // });
 
// });