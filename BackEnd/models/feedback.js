const mongoose = require('mongoose');

var Feedback = mongoose.model('Feedback', {
    name: {type: String},
    email: {type: String},
    message: {type: String} 
});

module.exports = { Feedback };