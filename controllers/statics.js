const User = require('../models/user');
const Station = require('../models/station');

function staticsHomepage(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/homepage', { users }));
}

function staticsJourneyPlan(req, res) {
  Station
    .find()
    .exec()
    .then((stations) => {
      // var stations = stat.sort(function(a, b) {
      //   return a.name - b.name;
      // });
      // console.log(stations);
      User
        .find()
        .exec()
        .then((users) => res.render('statics/journeyplan', { stations, users}))
    });
}


module.exports = {
  homepage: staticsHomepage,
  journeyplan: staticsJourneyPlan
};
