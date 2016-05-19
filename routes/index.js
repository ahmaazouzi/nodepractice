var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.route('/')
.all(function(req, res, next){
	res.writeHead(200, {'Cntent-Type':'text/plain'}); //this is chained to the route'/'
	next();
})
.get(function(req, res, next){
	res.end('Will send all the dishes to you!!!');
}) //all these methods are chained together with no ; at the end of it
.post(function(req, res, next){
	res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
	res.end('I will delete all the dishes');
});
router.route('/:dishId')
.all(function(req, res, next){
	res.writeHead(200, {'Cntent-Type':'text/plain'}); //this is chained to the route'/'
	next();
})
.get(function(req, res, next){
	res.end('Will send details of the dish: ' + req.params.dishId + ' to you!!!');
})
.post(function(req, res, next){
	res.end('I have added details of the dish: ' + req.params.dishId + ' to you!!!');
});

module.exports = router;
