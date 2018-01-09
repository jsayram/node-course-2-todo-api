// const MongoClient = require('mongodb').MongoClient;

//desctructuring is so you can take any property from a particular library
const {MongoClient, ObjectID} = require('mongoDB');


/*now to connect to the database , it could be AWS url or HEROKU url etc...*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /* delete many */
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{

    //     console.log(result);

    // });

    /* delete one */
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{

    //     console.log(result);

    // });

    /* findOneAndDelete , this one is the favorite*/
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{

    //     console.log(result);

    // });



    // db.collection('Users').deleteMany({name: 'Jose'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
       _id: new ObjectID("5a5431be32991210855b44a4")
    }).then((results)=>{
            console.log(JSON.stringify(results,undifined,2));
    });




    // db.close();
});