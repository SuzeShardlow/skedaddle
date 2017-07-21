const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose       = require('mongoose');
const { port, db }   = require('./config/env');
const routes         = require('./config/routes');
const app            = express();

mongoose.Promise     = require('bluebird');
mongoose.connect(db);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(expressLayouts);
app.use(routes);

app.listen(port, () => console.log(`Express up and running on port: ${port}`));
