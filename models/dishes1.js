var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

//create Comment schema
var CommentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

//create schema
var dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	category: {
		type: String
	},
	label: {
		type: String
	},
	price: {
		type: Currency
	},
	comments: [CommentSchema]
},
	{
		timestamps: true,
		comments: true,
		zaza: true
});

//create model
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
