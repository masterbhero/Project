const mongoose = require('mongoose');

const ControllerSchema = mongoose.Schema({ 
    _id : mongoose.Schema.Types.ObjectId,
    note : String,
	user_id : String,		//initial value = 0 then user_id
	plot_id : String,       //initial value = 0 then plot_id
});

module.exports = mongoose.model('Controller',ControllerSchema,'Controller');
//var ProfileModel = mongoose.model('Profile', ProfileSchema, 'MyProfiles');

