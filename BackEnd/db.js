const mongoose = require('mongoose');

//ONLINE DATABASE
mongoose.connect(process.env.MONGO_ONLINE_URL, { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('[MLab] MongoDB connection for Notes By Nerds succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

//OFFLINE DATABASE
// mongoose.connect(process.env.MONGO_LOCAL_URL, { useNewUrlParser: true }, (err) => {
//     if (!err)
//         console.log('[Local] MongoDB connection for Notes By Nerds succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

mongoose.set('useCreateIndex', true)
require('./models/user');
module.exports = mongoose;