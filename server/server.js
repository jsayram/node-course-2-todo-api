//library imports
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');


//local imports
var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');


var app = express();

//to deploy to heroku
const port = process.env.PORT || 3000;


//middleware to send to express 
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

//get todos 

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});


// GET /todos/12345

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    /* // validate id , if not valid stop execution and respod with a 404 then send back and epmty body , aka call send()
     //findById
     //you got your sucess case if todo send it back , if no todo send back 404 with an empty body
     // you got your error case wich is 400 , then dont send back anything */
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });

    }).catch((e) => {
        res.status(400).send();
    })

    // res.send(req.params);
});


/* Setting up the route to delete a todo */
app.delete('/todos/:id', (req, res)=>{
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	 Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send(todo);

    }).catch((e) => {
        res.status(400).send();
    });
});


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
})


module.exports = { app };