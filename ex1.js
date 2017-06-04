var express = require ('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 3000;


//Make request to URL
//=================================================
var url = 'http://www.npr.org/sections/news/'

request(url, function(err, res, body){
	var $ = cheerio.load(body);
//=================================================	

	var articleName = $('.title a');
	var articleNameText = articleName.text();

	console.log(articleNameText);
})




//Make request to URL
//================================================
// var url = 'https://www.google.com/'
// request(url, function(err,res,body){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(body);
// 	}
// })











//Listen on Port 8000
//=================================================
app.listen(port);
console.log ("Listening on Port " + port);