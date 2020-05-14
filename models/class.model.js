var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
	classId: Number,
	subject: String,
	address: String,
	price: String,
	require: String,
	sex: String,
	info: String,
	time: String,
	cost: String,
	additional: String,
	income: String 


});

var Classes = mongoose.model('Classes', classSchema, 'classes');

module.exports = Classes;