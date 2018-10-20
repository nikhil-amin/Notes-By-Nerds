const express = require('express');
var router = express.Router();

var { Feedback } = require('../models/feedback');

router.post('/', (req, res) => {
    var feedback = new Feedback ({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    feedback.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Saving Feedback: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;