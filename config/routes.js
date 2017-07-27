const express       = require('express');
const router        = express.Router();

const statics       = require('../controllers/statics');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');

const stations      = require('../controllers/stations');
const users         = require('../controllers/users');
const comments      = require('../controllers/comments');
const journeys      = require('../controllers/journeys');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in to view this content');
      res.redirect('/login');
    });
  }

  return next();
}

function loggedInUserOnlyRoute(req, res, next) {
  if (! req.session.userId) {
    // No user logged in, go home
    res.redirect('/');
  } else {
    if (req.params.id == req.session.userId) {
      // Logged in user requesting their own page
      return next();
    } else {
      // Logged in user requesting another users page
      res.redirect('/');
    }
  }
}

router.route('/')
  .get(statics.homepage);

router.route('/stations')
  .get(stations.index)
  .post(secureRoute, stations.create);

router.route('/journeyplan')
  .get(secureRoute, statics.journeyplan)
  .post(secureRoute, journeys.create);

// router.route('/stations/new')
//   .get(secureRoute, stations.new);

router.route('/stations/:id')
  .get(stations.show)
  .post(secureRoute, comments.create)
  .put(secureRoute, stations.update)
  .delete(secureRoute, stations.delete);

// router.route('/stations/:id/edit')
//   .get(stations.edit);

router.route('/stations/:stationId/comments/:commentId')
  .delete(comments.delete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/users/:id')
  .get(secureRoute, loggedInUserOnlyRoute, users.show);

router.route('/users/:userId/journeys/:journeyId')
  .delete(secureRoute, journeys.delete);


module.exports = router;
