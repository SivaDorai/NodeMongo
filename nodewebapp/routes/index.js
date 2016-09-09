var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send({name:'siva'});
  res.render('index', { title: 'Express' });
});

module.exports = router;
