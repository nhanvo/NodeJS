// load the todo model
var Todo = require('./models/todo');

module.exports = function(app) {

	// Get all todos
	app.get('/api/todos', function(req, res) {
	    // use mongoose to get all todos in the database
	    Todo.find(function(err, todos){
	        if (err)
	            res.send(err);
	        console.log(todos);
	        // return all todos in JSON format
	        res.json(todos); 
	    });
	});

	// Create todo and send back  all todos after creation
	app.post('/api/todos', function(req, res) {
	    // create one todo, information comes from AJAX request from AngularJS
	    Todo.create({
	        text: req.body.text,
	        done: false
	    }, function(err, todo) {
	        if (err)
	            res.send(err);

	        // get and return all the todos after you create another
	        Todo.find(function(err, todos){
	            if (err)
	                res.send(err);

	            // return all todos in JSON format
	            res.json(todos);
	        });
	    });
	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
	    Todo.remove({
	        _id: req.params.todo_id
	    }, function(err, todo) {
	        if (err)
	            res.send(err);

	        // get and return all the todos after you create another
	        Todo.find(function(err, todos) {
	            if (err)
	                res.send(err)

	            res.json(todos);
	        });
	    })
	});
};