const {ObjectID} = require('mongodb');

//local files
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


//id for an object in the todo collections ( inside the database)
var id = '5a5558890c38d640165635e5';
var id2 = '5a54ff8bf698c95813f4536f';
//this is to validate ID catching if the ID is currupt or not present
if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}



// //this returns an array 
// Todo.find({
// 	_id: id
// }).then((todos)=>{

// 	console.log('Todos', todos);

// });

// //this returns just the object in looking for
// Todo.findOne({
// 	_id: id
// }).then((todo)=>{

// 	console.log('Todo', todo);

// });


// //this just finds by id
// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id', todo);

// }).catch((e)=>{
// 	return console.log(e);
// })


User.findById(id2).then((user)=>{
	if(!user){
		return console.log('Unable to find user');
	}
	console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e)=>{
	return console.log(e);
})






