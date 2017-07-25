const User = require('../models/user');

function staticsHomepage(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/homepage', { users }));
}

function staticsJourneyPlan(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/journeyplan', { users }));
}


module.exports = {
  homepage: staticsHomepage,
  journeyplan: staticsJourneyPlan
};
