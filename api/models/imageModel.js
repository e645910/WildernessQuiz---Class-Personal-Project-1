var mongoose = require('mongoose');

var schema = mongoose.Schema({

  img: { data: Buffer, contentType: String }
  
});

module.exports = mongoose.model('Image', schema);