require('./db.js');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

var feedbackController = require('./controllers/feedbackController.js');
var noteController = require('./controllers/noteController.js');
const rtsIndex = require('./routes/index-routes');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:4200', 'http://127.0.0.1:4200'] }));
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
    else{
        console.log(err);
    }
});

app.listen(3000, () => console.log('Server started at port : 3000'));
