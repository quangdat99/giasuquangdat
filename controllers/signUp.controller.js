
var Phuhuynh = require('../models/phuhuynh.model');
var Tutor = require('../models/tutor.model');
var shortid = require('shortid');


module.exports.tutor = async function(req, res) {
	var tutor = await Tutor.find();
	res.render('signUp/tutor', {
		tutor: tutor
	});
};

module.exports.chitiet = async function(req, res) {
	var id = req.params.id;
	var tutor = await Tutor.findOne({id:id});
	res.render('signUp/chitiet', {
		tutor: tutor
	});
};

module.exports.phuhuynh = async function(req, res) {
	var phuhuynh = await Phuhuynh.find();
	res.render('signUp/phuhuynh', {
		phuhuynh: phuhuynh
	});
};

module.exports.postPhuhuynh = function(req, res) {
	Phuhuynh.create(req.body);
	res.render('dang-ky-thue-gia-su');
};


module.exports.postTutor = function(req, res) {
	req.body.id ="GA"+ Math.floor(Math.random() * 10000);;
	Tutor.create(req.body);	
	res.render('register');
};