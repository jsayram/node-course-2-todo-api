var mongoose = require('mongoose');

/*new user model for authentication model*/
// email property -- require it , and trim it set the type equal to string , set min length to 1 
var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    }
});

/* creating user collection*/
// var User = new User({
//     email: 'jose@example.com'
// });
// User.save().then((doc) => {
//     console.log('Saved User', doc);
// }, (e) => {
//     console.log('Unable to save User', e);
// });

module.exports = {User};