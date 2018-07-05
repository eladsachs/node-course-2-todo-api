const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b3e50dcdd697c101ab276f9';
let id2 = '5b3912f9df854d4c32d7c8db';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id2).then((user) => {
  if (!user) {
    return console.log("Unable to find user!");
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found!');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));