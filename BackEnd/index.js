const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var feedbackController = require('./controllers/feedbackController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://127.0.0.1:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/feedbacks', feedbackController);