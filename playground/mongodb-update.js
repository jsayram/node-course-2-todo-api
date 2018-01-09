// const MongoClient = require('mongodb').MongoClient;

//desctructuring is so you can take any property from a particular library
const {MongoClient, ObjectID} = require('mongoDB');


/*now to connect to the database , it could be AWS url or HEROKU url etc...*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    //findOneAndUpdate(filter,update,options,callback)
    // db.collection('Todos').findOneAndUpdate({

    //     _id: new ObjectID('5a543b604fbcbbcaf980214a')

    // }, {
    //    $set: {
    //     completed: true
    //    } 

    // }, {
    //     returnOriginal: false
    // }).then((result)=>{

    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a54307ebe238b105ff2878b')

    },{

       $set:{
        name: 'Jose'
       }, 
       $inc: {
        age: 1 
       }

    },{
        returnOriginal: false
    }).then((result)=>{

        console.log(result);
    })

    // db.close();
});