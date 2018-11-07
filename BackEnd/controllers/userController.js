const mongoose = require('mongoose');
// const express = require('express');
const User = mongoose.model('User');

// var { User } = require('../models/user');

module.exports.register = (req, res, next) => {
    var user = new User ();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
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
}

// module.exports = router;