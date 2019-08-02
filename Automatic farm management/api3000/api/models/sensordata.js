const mongoose = require('mongoose');

const SensordataSchema = mongoose.Schema({ 
    _id : mongoose.Schema.Types.ObjectId,
    user_id : String,
	controller_id : String,
	temp : String,
	light : String,
	airhumid : String,
	dirthumid : String,
	date : String
});

module.exports = mongoose.model('Sensordata',SensordataSchema,'Sensordata');
//var ProfileModel = mongoose.model('Profile', ProfileSchema, 'MyProfiles');

