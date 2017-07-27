const User = require('../models/user');
const Station = require('../models/station');

function staticsHomepage(req, res) {
  if (req.session.userId) {
    // Someone is logged in, find their user info
    User
      .findById(req.session.userId)
      .exec()
      .then((user) => {
        res.render('statics/homepage', {user});
      });
  } else {
    // Render the page with no users?
    res.render('statics/homepage');
  }
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
