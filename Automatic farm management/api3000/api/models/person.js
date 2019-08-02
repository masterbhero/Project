const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String
});

module.exports = mongoose.model('Person',PersonSchema);