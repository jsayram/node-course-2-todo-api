const { ObjectID } = require('mongodb');

//local files
const { mongoose } = require('./../server/db/mongoose.js');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user.js');

/*this removes all the data in database */
// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });


//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()


Todo.findOneAndRemove({ _id: '5a57ff514fbcbbcaf9806937' }).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('5a57ff514fbcbbcaf9806937').then((todo) => {

    console.log(todo);

});