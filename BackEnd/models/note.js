const mongoose = require('mongoose');

var Note = mongoose.model('Note', {
    title: {
        type: String,
        required: 'Book Title can\'t be empty'
    },
    author: {
        type: String,
        required: 'Book Author can\'t be empty',
    },
    price: {
        type: String,
    },
    uploaderName: {
        type: String,
        required: 'Your name can\'t be empty',
    },
    uploaderEmail: {
        type: String,
        required: 'Email can\'t be empty',
    },
    uploadedOn: {
        type: String
    },
    lastModified: {
        type: String
    }
});

module.exports = { Note };