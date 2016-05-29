'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test1db', function (err) {
	if (err) 
	{
		console.log('Error connecting to db '+err);
	}
	else
	{
		console.log('Connected to MongoDB');
	}
})