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
//public API
return{
	add:add,
}
};