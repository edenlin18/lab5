// Get all of our friend data
var data = require('../data.json');

exports.addFriend = function(req, res) { 
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	var hobby = req.query.hobby;
	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people",
		"hobby": hobby
	}
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add'); 
}