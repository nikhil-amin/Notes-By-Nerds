const mongoose = require('mongoose');

//ONLINE DATABASE
mongoose.connect('mongodb://root:root073@ds147233.mlab.com:47233/notesbynerdsdb', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB connection for Notes By Nerds succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

//OFFLINE DATABASE
// mongoose.connect('mongodb://127.0.0.1:27017/notesbynerdsdb', { useNewUrlParser: true }, (err) => {
//     if (!err)
//         console.log('MongoDB connection for Notes By Nerds succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

mongoose.set('useCreateIndex', true)
require('./models/user');
module.exports = mongoose;