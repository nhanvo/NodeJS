/*========================set up========================*/

var express   = require('express');
var app       = express();              // create our app express
var mongoose  = require('mongoose');    // mongoose for mongodb
var morgan    = require('morgan');      // log request to the console (express 4)
var bodyParser= require('body-parser'); // pull information from HTML POST (express 4)
var methodOverride = require('method-override');    // simulate DELETE and PUT (express 4)
var database = require('./config/database');

/*========================configuration========================*/

// connect to mongoDB database on modulus.io
mongoose.connect(database.url);

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
app.set('port', process.env.PORT || 3000);

/*========================routes=============================*/
require('./app/routes')(app);

/*========================application========================*/
app.get('*', function(req, res) {
    res.sendfile('.public/index.html');
});

/*========================listen (start app with node server.js)*/
app.listen(app.get('port'), () => {
    console.log('listening on ' + app.get('port'));
});