var express = require('express');
var controller = require('../controllers/signUp.controller');
var validate = require('../validate/signUp.validate');
var authMiddleware = require('../middlewares/auth.middleware');


var router = express.Router();

router.get('/phuhuynh',authMiddleware.reqAdmin, controller.phuhuynh);

router.get('/tutor',authMiddleware.reqAdmin, controller.tutor);

router.get('/chitiet/:id',authMiddleware.reqAdmin, controller.chitiet);

router.post('/phuhuynh',validate.postPhuhuynh, controller.postPhuhuynh);

router.post('/tutor',validate.postTutor, controller.postTutor);


module.exports = router;
