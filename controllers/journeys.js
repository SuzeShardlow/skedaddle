const User = require('../models/user');
const Journey = require('../models/journey');
const Station = require('../models/station');

function journeysCreate(req, res) {
  console.log('HIT');
  Journey
  .create(req.body)
  .then(journey => {
    User
    .findById(req.session.userId)
    .then(user => {
      user.savedJourneys.push(journey._id);
      user.save();
      console.log(user);
      res.json(journey);
    });
  });
}

function journeysDelete(req, res) {
  User
  .findById(req.params.userId)
  .exec()
  .then(user => {
    console.log(user.savedJourneys);
    var index = user.savedJourneys.indexOf(req.params.journeyId);
    if (index > -1) {
      user.savedJourneys.splice(index, 1);
      // const journey = user.savedJourneys.find(req.params.journeyId);
      // journey.remove();
      user.save();
    }
    console.log(user);
  })
  .then(user => {
    Station
    .find({ createdBy: req.params.userId })
    .exec()
    .then(stations => {
      return res.redirect(`/users/${req.params.userId}`);
    });
    // Journey.findByIdAndRemove(req.params.journeyId, function(data) {
    //   console.log('hello');
    //   console.log(data);
    //   User
    //   .findById(req.params.userId)
    //   .exec()
    //   .then(user => {
    //     Station
    //     .find({ createdBy: req.params.userId })
    //     .exec()
    //     .then(stations => {
    //       res.render('users/show', { user, stations });
    //     });
    //   });
  });
}

// function staticsJourneyPlan(req, res) {
//   Station
//     .find()
//     .exec()
//     .then((stations) => {
//       User
//         .find()
//         .exec()
//         .then((users) => res.render('statics/journeyplan', { stations, users}))
//     });
// }

module.exports = {
  create: journeysCreate,
  delete: journeysDelete
};
