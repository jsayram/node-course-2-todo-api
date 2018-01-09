// const MongoClient = require('mongodb').MongoClient;

//desctructuring is so you can take any property from a particular library
const {MongoClient, ObjectID} = require('mongoDB');


/*now to connect to the database , it could be AWS url or HEROKU url etc...*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').find({
    //     _id: new ObjectID('5a542eeee8b1611041b1c454')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err)=>{

    //     console.log('Unable to fetch todos', err);

    // })


    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);

    // }, (err)=>{

    //     console.log('Unable to fetch todos', err);

    // })


    db.collection('Users').find({name: 'Jose'}).toArray().then((docs)=>{

        console.log(JSON.stringify(docs, undefined, 2));

    },(err)=>{
        console.log('Unable to fetch Users',err);

    })



    // db.close();
});