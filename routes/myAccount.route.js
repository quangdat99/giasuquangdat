var express = require('express');
var controller = require('../controllers/myAccount.controller');
var validate = require('../validate/signUp.validate');


var router = express.Router();

router.get('/', controller.index);

router.post('/profile',validate.update , controller.update);

router.get('/change_password', controller.change_password);

router.post('/password',validate.change_password, controller.password);


module.exports = router;