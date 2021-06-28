const mongoose = require('mongoose');

require('dotenv').config();
require('../models/user');

const devConnection = process.env.DB_STRING;

mongoose.connect(devConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to ANA Link Mongo DB');
});
