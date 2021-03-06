const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes', {useNewUrlParser: true,
useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connected to db!');
});