const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json())

var db;

MongoClient.connect('mongodb://nhanvo:daihaithuy512@ds029725.mlab.com:29725/start-wars-quotes', (err, database) => {
  if (err) return console.log(err);

  db = database;
  app.listen(app.get('port'), () => {
    console.log('listening on ' + app.get('port'));
  })
})
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray(function(err, result) {
    if (err) return console.log(err);

    // Render index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('save to database');
    res.redirect('/');
  })
})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'NhanVo'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name}, (err,result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got delete')
  })
})