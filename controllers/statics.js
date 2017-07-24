const User = require('../models/user');

function staticsHomepage(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/homepage', { users }));
}

module.exports = {
  homepage: staticsHomepage
};
