var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/videos');

var videoSchema = new Schema({
    videoTitle:String,
    videoCode:String,
    videoDescription:String,
    videoDesc:String
},{collection:'videolib'});

var Video = mongoose.model('videolib',videoSchema);
var col = Video.collection.name;

console.log(col);


/* GET users listing. */
router.route('/getAll').get(function(req, res, next) {
    console.log('entered router finally');
    Video.find().exec
        (function(err, data){
        if (err){
            err.status = 'Server Error';
            console.log('data from server' + err.status);
            res.status(500).send();
        }
        else{
            var output =  "angular.callbacks._0(" + JSON.stringify(data) + ")";
            res.send(output);
            //res.render('videos', { videos: data });
        }
    });


});

module.exports = router;
