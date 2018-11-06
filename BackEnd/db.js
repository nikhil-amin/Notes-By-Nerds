const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notesbynerdsdb', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB connection for Notes By Nerds succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

mongoose.set('useCreateIndex', true)

module.exports = mongoose;