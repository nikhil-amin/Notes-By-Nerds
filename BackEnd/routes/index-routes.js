const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', async (req, res) => {
    try {
        let fullName = req.body.fullName;
        let email = req.body.email;
        let password = req.body.password;
        let city = req.body.city;

        if (!fullName)
            res.status(400).send(['fullName is mandatory.']);

        if (!email)
            res.status(400).send(['email adrress is mandatory.']);

        if (!password)
            res.status(400).send(['password is mandatory.']);

        let registerUser = await userController.register(fullName, email, password, city);
        if (registerUser)
            res.status(200).send(registerUser);

        res.status(400).send("Error registering the user!");
    } catch (exception) {
        res.status(500).send(['Something went wrong, Please try again!'])
    }
});

router.post('/authenticate', userController.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, userController.userProfile);

module.exports = router;