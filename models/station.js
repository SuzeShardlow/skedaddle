const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  timeCreated: {type: Date },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  lines: { type: Array, required: true },
  naptan: { type: String, required: true },
  zones: { type: Array, required: true },
  icsCode: { type: String, required: true },
  streetAddress: { type: String },
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Station', stationSchema);
