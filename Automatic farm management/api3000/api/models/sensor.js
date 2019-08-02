const mongoose = require('mongoose');

const SensorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    value1: String,
    value2: String,
    value3: String, 
    owner: String,
    owner_name: String
});

module.exports = mongoose.model('Sensor',SensorSchema);
//var ProfileModel = mongoose.model('Profile', ProfileSchema, 'MyProfiles');