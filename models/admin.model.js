var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
	email: String,
	password: String
});
var Admin = mongoose.model('Admin', adminSchema, 'admin');

module.exports = Admin;