var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formSchema = new Schema({     //initialize a new model
  name: String,
  phone: String,
  email: String,
  address: String,
  
});

var BigForm = mongoose.model('BigForm', formSchema);

module.exports = BigForm;