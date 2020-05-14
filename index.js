require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var classRoute = require("./routes/class.route");
var route = require("./routes/route");
var deleteRoute = require("./routes/delete.route");
var signUpRoute = require("./routes/signUp.route");
var authRoute = require('./routes/auth.route');
var myAccountRoute = require('./routes/myAccount.route');
var authMiddleware = require('./middlewares/auth.middleware');


var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("abc123xyz"));
app.use(express.static('public'));

app.get('/admin',authMiddleware.reqAdmin, authMiddleware.requireAuth, function(req, res) {
	res.render('admin');
});

app.use('/classes',authMiddleware.req, classRoute);
app.use('/delete',authMiddleware.reqAdmin, deleteRoute);
app.use('/myaccount',authMiddleware.req, authMiddleware.requireLogin, myAccountRoute);
app.use('/signup', signUpRoute);
app.use('/auth', authRoute);
app.use('/',authMiddleware.req, route);


app.listen(port, function () {
	console.log('Server listening on port '+ port);
});