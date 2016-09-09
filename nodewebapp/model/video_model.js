
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongo = require('mongodb');
var Schema = mongoose.Schema;

//var Server  = mongo.Server, Db = mongo.Db, BSON = mongo.BSONpure;

 mongoose.connect('mongodb://localhost:27017/videos');


var videoSchema = new Schema({
	videoTitle:String,
	videoCode:String,
	videoDescription:String,
	videoDesc:String
});

module.exports = mongoose.model('videolib',videoSchema);