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
  lines: [{ type: Array }],
  naptan: [{ type: String }],
  zones: { type: Array, required: true },
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Station', stationSchema);
