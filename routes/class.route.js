var express = require('express');
var controller = require('../controllers/class.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var validate = require('../validate/signUp.validate');



var router = express.Router();


router.get('/create',authMiddleware.reqAdmin,authMiddleware.requireAuth, controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.view);

router.post('/create',validate.postCreate, controller.postCreate);

router.get('/edit/:id',authMiddleware.reqAdmin,authMiddleware.requireAuth, controller.edit);

router.post('/update',authMiddleware.requireAuth, controller.update);

module.exports = router;