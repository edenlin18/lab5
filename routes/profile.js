// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res) { 
	// Your code goes here
	res.render('profile', data);
}