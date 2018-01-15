var mongoose = require('mongoose');

/* creating a model for todo */
var Todo = mongoose.model('Todo', {
	text: {
	   type: String,
	   required: true,
	   minlength: 1,
	   trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	_creator: {
		type: mongoose.Schema.Types.ObjectId, 
		required: true
	}
});

/* first todo collection*/
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });
// //this saves it to the mongodb database
// newTodo.save().then((doc)=>{
// 	console.log('Saved todo', doc);
// }, (e)=>{
// 	console.log('Unable to save todo');
// });


/* second todo collection*/
// var otherTodo = new Todo({
// 	text: 'Something to do'
// });
// otherTodo.save().then((doc)=>{
// 	console.log('Saved todo', doc);
// }, (e)=>{
// 	console.log('Unable to save todo', e);
// });


//export the model
module.exports = {Todo};