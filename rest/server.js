var express     = require('express');
var bodyParser  = require('body-parser');
var mogoConfig = require('./mongo');

var app         = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers


var postController = require('./controllers/postController');
app.use('/api/post', postController);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});