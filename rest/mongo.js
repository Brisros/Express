const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://<brisros>:<Priy4nk430>@ds149268.mlab.com:49268/posts', (err, client) => {
  if (err) return console.log(err)
  db = client.db('posts') // whatever your database name is
  console.log('connected to the DB')
})