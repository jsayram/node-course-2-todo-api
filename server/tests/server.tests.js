const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server.js');
const {Todo} = require('./../models/todo.js');


//runs before each of the cases and wipes out the database
beforeEach((done) => {
	Todo.remove({}).then(()=>{
		return done();
	});
});


describe('POST /todos', ()=>{

   //first test case
	it('should create a new todo', (done) =>{
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res)=>{
				expect(res.body.text).toBe(text);
			})
			.end((err, res)=>{
				if(err){
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e)=>{
					return done(e);
				})

			});
	});

	//second test case
	it('should not create todo with invalid body data', (done) =>{

		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err,res)=>{
				if(err){
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(0);
					done();
				}).catch((e)=>{
					return done(e);
				});
			});
	});

});