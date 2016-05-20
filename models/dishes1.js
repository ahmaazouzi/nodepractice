var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create schema
var dishSchema = new Schema({
	name: {
		type: String,
		requireed: true,
		unique: true
	},
	description: {
		type: String,
		requireed: true
	}
},
	{
		timestamps: true
});

//create model
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
