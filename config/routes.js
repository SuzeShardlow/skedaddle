const express = require('express');
const router  = express.Router();

const statics = require('../controllers/statics');

router.route('/')
  .get(statics.homepage);

module.exports = router;
