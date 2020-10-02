require('dotenv').config()
require('./db.js');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

var feedbackController = require('./controllers/feedbackController.js');
var noteController = require('./controllers/noteController.js');
const rtsIndex = require('./routes/index-routes');
const PORT = process.env.PORT;

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: [process.env.BASE_URL_FRONTEND_1, process.env.BASE_URL_FRONTEND_2] }));
app.use(passport.initialize());
app.use('/feedbacks', feedbackController);
app.use('/notes', noteController);
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else {
        console.log(err);
    }
});

app.listen(PORT, () => console.log('Server started at port : ' + PORT));
