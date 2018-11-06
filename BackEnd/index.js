const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var feedbackController = require('./controllers/feedbackController.js');
var userController = require('./controllers/userController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://127.0.0.1:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/feedbacks', feedbackController);
app.use('/api', userController);

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