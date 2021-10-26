const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

/**
 * @description Register a new user to the platform.
 * 
 * @author Roshan Raj
 * @since 26-10-2021 - Refactored the older method using Promises and async/await.
 * 
 * @param {string} fullName 
 * @param {string} email 
 * @param {string} password 
 * @param {string} [city] 
 * 
 * @returns {object} User object is returned is registration was a success.
 */
let register = async (fullName, email, password, city) => {
    return new Promise(async (resolve, reject) => {
        try {
            email = (email).toLowerCase();

            let newUserDetails = {
                "email": email,
                "password": password
            }

            if(fullName)
                newUserDetails.fullName = fullName;

            if(city)
                newUserDetails.city = city;

            const newUser = new User(newUserDetails);
            const user = await newUser.save();

            if(user)
                return resolve(user);

            return reject(null);

        } catch (exception) {
            return reject(exception);
        }
    })
}

let authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

let userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email']) });
        }
    );
}

module.exports = {
    register,
    authenticate,
    userProfile
}