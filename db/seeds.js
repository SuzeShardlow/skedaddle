const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User = require('../models/user');
const Station = require('../models/station');

User.collection.drop();
Station.collection.drop();

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

  return Station
  .create([{
    name: 'Westminster',
    zone: '1',
    lines: [
      'Circle',
      'District',
      'Jubilee'
    ]
  }, {
    name: 'Oxford Circus',
    zone: '1',
    lines: [
      'Bakerloo',
      'Central',
      'Victoria'
    ]
  }]);
})

.then((stations) => {
  console.log(`${stations.length} stations created!`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});
