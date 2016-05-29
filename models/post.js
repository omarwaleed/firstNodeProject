'use strict';

var mongoose = require('mongoose');

var postScheme = new mongoose.Schema({
	 /* body... */ 
	content: {type: String, required: true},
	title: {type: String, required: true},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var postModel = mongoose.model('Post', postScheme);

module.exports = postModel;