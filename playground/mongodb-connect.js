// const MongoClient = require('mongodb').MongoClient;

//desctructuring is so you can take any property from a particular library
const {MongoClient, ObjectID} = require('mongoDB');

/*this creates a new instance of objectID, its optional*/
// var obj = new ObjectID();
// console.log(obj);


/*example*/
	// var user = {
	// 	name:'Jose',
	// 	age: 25
	// };
	// //this is how one would destructure an object such as the one above
	// var {name} = user;
	// console.log(name);


/*now to connect to the database , it could be AWS url or HEROKU url etc...*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


//1.)
    // db.collection('Todos').insertOne({
    // 	text: 'Something to do',
    // 	completed: false

    // },(err, result)=>{

    // 	if(err){
    // 		return console.log('Unable to insert Todo', err);
    // 	}

    // 	//here is the success code
    // 	console.log(JSON.stringify(result.ops,undefined,2));

    // });

    /*Insert new doc into Users collection , that has (name,age,location)*/

//2.)
    // db.collection('Users').insertOne({
    //     name: 'Jose',
    //     age: 26,
    //     location: 'charlottesville'

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Users', err);
    //     }
    //     // here is the success code
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))

    // });


    db.close();
});