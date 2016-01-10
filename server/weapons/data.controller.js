var mongoose = require('mongoose');
var Data = require('./form.model');

module.exports = function(){
	
//business logic

var empty = {name:'fake'};

var save = function(req,res){
	var data = new Data(req.body);
	//console.log(data);
	data.save(
		).then(
		function(){
			res.status(200).send("Data saved!");
		}).catch(
		function(err){
			console.log(err);
			res.status(500).send("Data not saved!");
		}
		);
};

  var take = function (req, res) {
	Data.find().exec(
		).then(
		function(weapons){
			var weaponsObj = {};
			for(var i=0; i<weapons.length; i++){
				 weaponsObj[weapons[i]] = weapons[i];
			}
			res.json(weaponsObj);
		})
		.catch(function(err){
  				throw err;
  				});
  };
  
  var takeOne = function(req, res){
  	//console.log("I'm in the server");
  	Data.find({name: req.params.code}).exec(
  		).then(
  			function(weapons){
  				console.log(weapons[0]);
  				if(!weapons[0]){
  					console.log(req.params.code + " is not in your DB");
  					res.json(empty);
  				}else{
  					res.json(weapons[0]);}	
  		}).catch(function(err){
  				throw err;
  				});
  };
  
  var remove = function(req, res){
  //console.log("sto nel server");
  	Data.findOneAndRemove({name: req.params.code}).exec(
  		).then(
  		function(weapon){
  		//	console.log(weapon);
  		}).catch(function(err){
  				throw err;
  				});
  };
  
  var update = function(req, res){
  	  console.log("sto nel servee");
	  Data.find({name: req.params.code}).exec(
	  	).then(
	  		function(weapon){
	  			// console.log(weapon);
	  		
	  		}).catch();	

  };
//public API
	return{
		save:save,
		take:take,
		takeOne:takeOne,
		remove:remove,
		update:update,
	};
};