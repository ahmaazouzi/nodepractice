var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require("mongoose");


var Dishes = require('../models/dishes1');

router.use(bodyParser.json());


// router.route('/')
// .get(function(req, res, next){
// 	Dishes.find({}, function(err, dish){
// 		if (err) throw err;
// 		res.json(dish);
// 	});
// }) //all these methods are chained together with no ; at the end of it

// .post(function(req, res, next){
// 	Dishes.create(req.body, function(err, dish){
// 		if (err) throw err;
// 		console.log('Dish created!!!');
// 		var id = dish._id;
// 		res.writeHead(200, {
// 			'Content-Type': 'text/plain'
// 		});
// 		res.end('Added dish with id: ' + id);
// 	});
// })

// .delete(function(req, res, next){
// 	Dishes.remove({}, function(err, resp){
// 		if (err) throw err;
// 		res.json(resp);
// 	});
// });

// //parameterized interaction with mongodb
// router.route('/:dishId')
// .get(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		if (err) throw err;
// 		res.json(dish);
// 	});
// })

// .put(function(req, res, next){
// 	Dishes.findByIdAndUpdate(req.params.dishId, {
// 		$set: req.body
// 	}, {
// 		new: true
// 	}, function(err, dish
// 		){
// 		if (err) throw err;
// 		res.json(dish);
// 	});
// })

// .delete(function(req, res, next){
// 	Dishes.remove(req.params.dishId, function(err, resp){
// 		if (err) throw err;
// 		res.json(resp);
// 	});
// });

// //handling comments
// router.route('/:dishId/comments')
// .get(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		if (err) throw err;
// 		res.json(dish.comments);
// 	});
// })

// .post(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		if (err) throw err;
// 		dish.comments.push(req.body);

// 		dish.save(function(err, dish){
// 			if (err) throw err;
// 			console.log('Updated comments');

// 			res.json(dish);
// 		});
// 	});
// })

// .delete(function(req, res, next){
// 	if (err) throw err;

// 	for (var i = (dish.comments.length - 1); i >= 0; i--){
// 		dish.comments.id(dish.comments[i]._id).remove();
// 	}

// 	dish.save(function(err, result){
// 		if (err) throw err;
// 		res.writeHead(200, {
// 			'Content-Type': 'text/plain'
// 		});
// 		res.end('Deleted all comments!!');
// 	});
	
// });

// //specific comments
// router.route('/:dishId/comments/:commentId')
// .get(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		if (err) throw err;
// 		res.json(dish.comments.id(req.params.commentId));
// 	});
// })

// .put(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		if (err) throw err;

// 		dish.comments.id(req.params.commentId).remove();

// 		dish.comments.push(req.body);

// 		dish.save(function(err, dish){
// 			if (err) throw err;
// 			console.log('Updated comment!');
// 			console.log(dish);
// 		});
// 	});
// })

// .delete(function(req, res, next){
// 	Dishes.findById(req.params.dishId, function(err, dish){
// 		dish.comments.id(req.params.commentId).remove();

// 		dish.save(function(err, resp){
// 			if (err) throw err;
// 			res.json(resp);
// 		});
// 	});
// });

module.exports = router;
