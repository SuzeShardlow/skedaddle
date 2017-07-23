const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognised credentials' });
      }

      req.flash('info', `Thanks for logging in, ${user.firstname}!`);

      // add the current user's id into the session so I can be referenced anywhere.
      // this will allow me to check if someone is signed in or not
      // which will change the views of the website and also allow access to restricted routes.

      // adding the user's id into the session after the user has logged in with the correct credentials.
      req.session.userId = user._id;

      return res.redirect('/');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
