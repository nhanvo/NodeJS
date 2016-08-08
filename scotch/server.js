/*========================set up========================*/

var express   = require('express');
var app       = express();              // create our app express
var mongoose  = require('mongoose');    // mongoose for mongodb
var morgan    = require('morgan');      // log request to the console (express 4)
var bodyParser= require('body-parser'); // pull information from HTML POST (express 4)
var methodOverride = require('method-override');    // simulate DELETE and PUT (express 4)

/*========================configuration========================*/

// connect to mongoDB database on modulus.io
mongoose.connect('mongodb://nhanvo:daihaithuy512@jello.modulusmongo.net:27017/axYvos3e')

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// log every request to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(methodOverride());

/*========================model========================*/
var Todo = mongoose.model('Todo', {
    text: String
})

/*========================routes========================*/

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


/*========================listen (start app with node server.js)*/
app.listen(8080);
console.log("app listening on port 8080");