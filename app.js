'use strict';

var express = require('express');
var parser = require('body-parser');
var Post = require('./models/post');

var app = express();

app.use(parser.json()); // support json encoded bodies

// var router = express.Router();

// set the view engine to ejs
app.set('view engine', 'ejs');

// var mongoose = require('mongoose');
require('./database');

app.use(parser.urlencoded());

app.get('/', function (req, res) {

	var all_posts;
	Post.find({}, function (err, posts) {
		// res.json({all_posts: posts});
		if (err) {
			return res.send("error in index");
		}
		res.render('index.ejs', {text: 'custom text', all_posts: posts});
		// all_posts = posts;
	});
	// res.send(all_posts);
	// console.log(all_posts)
	// res.render('index.ejs', {text: 'custom text', all_posts: all_posts});
});

app.get('/new', function (req, res) {

	res.render('new.ejs');
});

app.post('/new', function (req, res) {

	console.log("-----");
	console.log(req.body);
	console.log("-----");

	var newPost = new Post({title: req.body.title, content: req.body.content, created_at: Date.now(), updated_at: Date.now()});
	newPost.save(function (err) {
		if (err) 
		{
			console.log(err);
			return;
		}
	});
	// res.send(newPost);
	var all_posts;
	Post.find({}, function (err, posts) {
		// res.json({all_posts: posts});
		if (err) {
			return res.send("error in index");
		}
		res.render('index.ejs', {text: 'custom text', all_posts: posts});
		// all_posts = posts;
	});
});

app.get('*', function (req, res) {
	res.send("Error");
});



app.listen(3000, function(req, res){
	console.log('Server started at 3000');
});

