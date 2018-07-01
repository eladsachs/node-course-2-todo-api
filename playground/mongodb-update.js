//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b3502ea9b9b1d30a895f134')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  // console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b37f540ef8bbeb12929746d')
  }, {
  $set: { name: 'Boogi' },
  $inc: {age: 1}
  },
  {
  returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});