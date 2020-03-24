const mongoose = require('mongoose');
const Schema = require('./schema.js');

mongoose.connect('mongodb://localhost/bestbuysearch', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB database");
});

let model = mongoose.model('navbarItems', Schema)

module.exports = model;