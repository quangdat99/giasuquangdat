
var Admin = require('../models/admin.model');

var Tutor = require('../models/tutor.model');


module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = async function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var admin = await Admin.findOne({email: email});
	 
	 if (!admin) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Admin không tồn tại .'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (admin.password !== password) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Sai password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 res.cookie('adminId', admin._id, {
	 	signed: true
	 });
	 res.redirect("/admin");
}


module.exports.loginTutor = function(req, res){
	res.render('login');
};

module.exports.postLoginTutor = async function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var tutor = await Tutor.findOne({email: email});
	 
	 if (!tutor) {
	 	res.render('login', {
	 		errors: [
	 			'Email không tồn tại .'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (tutor.password !== password) {
	 	res.render('login', {
	 		errors: [
	 			'Sai password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }
	
	 res.cookie('tutorId', tutor.id, {
	 	signed: true
	 });
	 

	 res.redirect("/myaccount");

}