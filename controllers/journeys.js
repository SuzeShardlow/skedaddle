const User = require('../models/user');
const Journey = require('../models/journey');

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
    const journey = user.journeys.id(req.params.journeyId);
    journey.remove();
    user.save();

    res.redirect(`/users/${user._id}`);
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
