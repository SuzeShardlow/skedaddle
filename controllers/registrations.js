const User = require('../models/user');

function registrationsNew(req, res) {
  return res.render('registrations/new');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then(user => {
      // req.flash('info', `Thanks for registering, ${user.firstname}!`);
      res.redirect('/');
      req.sessions.userId = user._id;      
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      res.status(500).end();
    });
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
