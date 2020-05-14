var mongoose = require('mongoose');

var tutorSchema = new mongoose.Schema({
	id: String,
	name: String,
	email: String,
	password: String,
	phone: String,
	gioitinh: String,
	namsinh: String,
	truong: String,
	nganh: String
});

var Tutor = mongoose.model('Tutor', tutorSchema, 'tutor');

module.exports = Tutor;