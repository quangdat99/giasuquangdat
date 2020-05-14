var mongoose = require('mongoose');

var giasuSchema = new mongoose.Schema({
	name: String,
	phone: Number,
	email: String,
	address: String,
	university: String,
	message: String,
	
});

var Giasu = mongoose.model('Giasu', giasuSchema, 'giasu');

module.exports = Giasu;