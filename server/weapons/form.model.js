var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formSchema = new Schema({     //initialize a new model
  name: String,
  description: String,
  image: String,
  availability: String,
  
});

var WeaponsForm = mongoose.model('WeaponsForm', formSchema);

module.exports = WeaponsForm;