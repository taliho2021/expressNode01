const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    date: Date,
    hash: String,
    salt: String
});

module.exports = mongoose.model('User', UserSchema);