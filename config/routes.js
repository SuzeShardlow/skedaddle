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

router.route('/')
  .get(statics.homepage);

router.route('/stations')
  .get(stations.index)
  .post(secureRoute, stations.create);

router.route('/journeyplan')
  .get(statics.journeyplan)
  .post(journeys.create);

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
  
router.route('/users/:userId/journeys/:journeyId')
  .delete(journeys.delete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/users/:id')
  .get(users.show);


module.exports = router;
