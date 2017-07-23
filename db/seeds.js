const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User = require('../models/user');

User.collection.drop();

User
  .create([{
    firstname: 'Suze',
    lastname: 'Shardlow',
    username: 'sshardlow',
    email: 'suze.shardlow1@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    firstname: 'test',
    lastname: 'User',
    username: 'test',
    email: 'suzeplays@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
