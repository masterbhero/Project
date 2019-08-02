const mongoose = require('mongoose');

const SensorSchema = mongoose.Schema({ 
	_id : mongoose.Schema.Types.ObjectId,
	username : String,		//email
	password : String,
	Firstname : String,
	Lastname : String,
	level : String			//admin or user
});

module.exports = mongoose.model('User',SensorSchema,'User');
//var ProfileModel = mongoose.model('Profile', ProfileSchema, 'MyProfiles');