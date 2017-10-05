const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const session        = require('express-session');
const flash          = require('express-flash');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const morgan         = require('morgan');
const { port, db, secret }   = require('./config/env');
const routes         = require('./config/routes');
const User           = require('./models/user');
const Station        = require('./models/station');
const Journey        = require('./models/journey');
const app            = express();

mongoose.connect(db);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  if (!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .exec()
    .then(user => {
      if(!user) {
        return req.session.regenerate(() => {
          req.flash('danger', 'You must be logged in to view this content');
          res.redirect('/');
        });
      }

      req.session.userId = user._id;
      req.user = user;

      res.locals.loggedInUser = user;
      res.locals.isLoggedIn = true;

      next();
    });
});

app.use(routes);
app.listen(port, () => console.log(`Express up and running on port: ${port}`));
