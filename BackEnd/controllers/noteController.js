const express = require('express');
var router = express.Router();

var { Note } = require('../models/note');

router.post('/', (req, res) => {
    var note = new Note ({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        uploadername: req.body.uploadername,
        uploaderemail: req.body.uploaderemail,
        uploadedOn: new Date()
    });
    note.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Uploading Notes: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;