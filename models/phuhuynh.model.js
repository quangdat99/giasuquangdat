var mongoose = require('mongoose');

var phuhuynhSchema = new mongoose.Schema({
	name: String,
	phone: Number,
	address: String,
	message: String,
});

var Phuhuynh = mongoose.model('Phuhuynh', phuhuynhSchema, 'phuhuynh');

module.exports = Phuhuynh;