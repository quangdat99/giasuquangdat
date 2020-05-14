var Phuhuynh = require('../models/phuhuynh.model');
var Tutor = require('../models/tutor.model');
var Classes = require('../models/class.model');



module.exports.postPhuhuynh = function (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.phone) {
		errors.push('Yêu cầu nhập số Điên thoại ');
	}

	if (errors.length) {
		res.render('dang-ky-thue-gia-su', {
			errors: errors,
			values: req.body
		});
		return;
	}

	res.locals.mes = "Đăng ký thành công"
	next();
};


module.exports.postTutor = function (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.email) {
		errors.push('Yêu cầu nhập Email ');
	}

	if (!req.body.password) {
		errors.push('Yêu cầu nhập mật khẩu  ');
	}

	if (errors.length) {
		res.render('register', {
			errors: errors,
			values: req.body
		});
		return;
	}
	res.locals.mes = "Đăng ký thành công"
	next();
};

module.exports.postCreate = async function (req, res, next) {
	var errors = [];

	if (!req.body.classId) {
		errors.push('Yêu cầu nhập Mã lớp  ');
	}

	if (!req.body.subject) {
		errors.push('Yêu cầu nhập Tên lớp  ');
	}

	if (!req.body.address) {
		errors.push('Yêu cầu nhập Địa chỉ  ');
	}

	if (!req.body.price) {
		errors.push('Yêu cầu nhập Giá tiền   ');
	}

	if (!req.body.require) {
		errors.push('Yêu cầu nhập Yêu cầu  ');
	}
	if (!req.body.sex) {
		errors.push('Yêu cầu nhập Giới tính   ');
	}

	if (!req.body.info) {
		errors.push('Yêu cầu nhập Thông tinh  ');
	}

	if (!req.body.time) {
		errors.push('Yêu cầu nhập Thời gian học ');
	}

	if (!req.body.income) {
		errors.push('Yêu cầu nhập Thu nhập  ');
	}

	if (!req.body.cost) {
		errors.push('Yêu cầu nhập Chi phí  ');
	}

	if (!req.body.additional) {
		errors.push('Yêu cầu nhập Bổ sung  ');
	}

	if (errors.length) {
		var classes = await Classes.find();
		res.render('classes/create', {
			errors: errors,
			values: req.body,
			classes: classes
		});
		return;
	}

	next();
};


module.exports.change_password = async function (req, res, next) {
	var errors = [];
	var tutor = await Tutor.findOne({id: req.signedCookies.tutorId});
	//console.log(tutor)
	if (req.body.current_password !== tutor.password ) {
		errors.push('Mật khẩu không chính xác ');
	}

	else if (req.body.new_password !== req.body.new_password_confirmation) {
		errors.push('Mật khẩu mới không khớp');
	}


	if (errors.length) {
		res.render('myaccount/change_password', {
			errors: errors
		});
		return;
	}
	res.locals.mes = "Thay đổi mật khẩu thành công!"
	next();
};

module.exports.update = async function (req, res, next) {
	res.locals.mes = "Cập nhật thành công!"
	next();
};