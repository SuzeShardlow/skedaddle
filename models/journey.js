const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  journeyInfo: { type: String, required: true },
  journeyDetails: { type: Array, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});



module.exports = mongoose.model('Journey', journeySchema);
