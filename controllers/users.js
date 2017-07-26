const User    = require('../models/user');
const Station = require('../models/station');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('savedJourneys')
    .exec()
    .then(user => {
      Station
        .find({ createdBy: user._id })
        .exec()
        .then(stations => {
          res.render('users/show', { user, stations });
        });
    });
}

module.exports = {
  show: usersShow
};
