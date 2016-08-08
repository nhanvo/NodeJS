var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://nhanvo:daihaithuy512@jello.modulusmongo.net:27017/axYvos3e');

// define schema
var schema = mongoose.Schema({ text: 'string' });

// Define collection with name is [todo] (will be save [todos] in mongodb)
var Todo = db.model('todo', schema);

// create instance of todos collection
var todo = new Todo({text: "I want to buy one house in this year." });

// save to database
todo.save(function (err) {
  if (err) {
    console.log(err);
  } 
  
  // Show to console when save finish
  console.log('OK');
  mongoose.disconnect();
});