var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

//exporting the mongoose configuration to be used in other files
module.exports = {mongoose};


