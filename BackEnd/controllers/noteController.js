const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Note } = require('../models/note');

router.get('/', (req, res) => {
    Note.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Notes: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var note = new Note ({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        uploaderName: req.body.uploaderName,
        uploaderEmail: req.body.uploaderEmail,
        uploadedOn: new Date(),
        lastModified: new Date()
    });
    note.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Uploading Notes: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;