const express = require('express');
var router = express.Router();

var { User } = require('../models/user');

router.post('/register', (req, res, next) => {
    var user = new User ({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
    });
    user.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { 
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
                // console.log('Error in registering user: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;