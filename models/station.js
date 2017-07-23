const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  zone: { type: String, required: true },
  lines: [{ type: String }],
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Station', stationSchema);
