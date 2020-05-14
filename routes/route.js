var express = require('express');
var authMiddleware = require('../middlewares/auth.middleware');
var validate = require('../validate/signUp.validate');
var Classes = require('../models/class.model')



var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});
router.get('/dang-ky-thue-gia-su', function(req, res) {
	res.render('dang-ky-thue-gia-su');
});
router.get('/dang-ky-lam-gia-su', function(req, res) {
	res.render('dang-ky-lam-gia-su');
});
router.get('/danh-sach-lop-moi',async function(req, res, next){
	var perPage = 8;
	var page = parseInt(req.query.page) || 1;

	var classes = await Classes.find().sort({classId: -1})
								.skip((perPage * page) - perPage).limit(perPage);
							   
	var count = await Classes.find().count();
	var pages = Math.ceil(count / perPage);

	res.render('danh-sach-lop-moi', {
		classes: classes,
		pages: pages,
		current: page
	});
});
router.get('/cach-thuc-nhan-lop', function(req, res) {
	res.render('cach-thuc-nhan-lop');
});
router.get('/dang-ky-nhan-lop/:id',authMiddleware.requireLogin, async function(req, res) {
	var id = parseInt(req.params.id);

	var classes = await Classes.findOne({ classId: id});
	res.render('dang-ky-nhan-lop', {
		classes: classes,
		tutorId: req.cookies.tutorId

	});
});
router.get('/thong-tin-tai-khoan', function(req, res) {
	res.render('thong-tin-tai-khoan');
});
router.get('/chinh-sach-hoan-phi', function(req, res) {
	res.render('chinh-sach-hoan-phi');
});
router.get('/chinh-sach-hoc-thu', function(req, res) {
	res.render('chinh-sach-hoc-thu');
});
router.get('/lien-he', function(req, res) {
	res.render('lien-he');
});
router.get('/admin',authMiddleware.requireAuth, function(req, res) {
	res.render('admin');
});
router.get('/login', function(req, res) {
	res.render('login');
});
router.get('/register', function(req, res) {
	res.render('register');
});
router.get('/logout', function(req, res) {
        res.clearCookie("tutorId");
        res.redirect('/login');
});
router.get('/logoutAdmin', function(req, res) {
        res.clearCookie("adminId");
        res.redirect('/auth/login');
});
module.exports = router;