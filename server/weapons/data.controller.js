var mongoose = require('mongoose');
var Data = require('./form.model');

module.exports = function(){
//business logic

var add = function(req,res){
	var data = new Data(req.body);
	console.log(data);
	data.save().then(
		function(){
			console.log("I'm inside then in add");
			res.status(200).send("Data saved!");


		}).catch(
		function(err){
			console.log("entro qui");
			console.log(err);
			res.status(500).send("Data not saved!");
		}
		);
};

  var take = function (req, res) {
	Data.find().exec().then(
		function(weapons){
			var weaponsObj = {};
			for(var i=0; i<weapons.length; i++){
				 weaponsObj[weapons[i]] = weapons[i];
			}
			
			return res.json(weaponsObj);
					}
					
		)
		.catch();
  };
  
  var takeOne = function(req, res){
  	console.log("sto al server");
  	Data.find({name: req.params.code}).exec().then(
  		function(weapons){
  			console.log(weapons);
  			return res.json(weapons[0]);	
  		}).catch();
  };
//public API
return{
	add:add,
	take:take,
	takeOne:takeOne,
};
};