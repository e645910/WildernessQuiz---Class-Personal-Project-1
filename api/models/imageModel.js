var mongoose = require('mongoose');

var schema = mongoose.Schema({

  img: { data: Buffer, contentType: String }
  // questionId: { type: mongoose.Schema.Types.ObjectID, ref: 'Question' }
  
});

module.exports = mongoose.model('Image', schema);