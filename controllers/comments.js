const Station = require('../models/station');

function commentsCreate(req, res) {
  Station
  .findById(req.params.id)
  .exec()
  .then(station => {
    req.body.user = req.user._id;

    station.comments.push(req.body);
    station.save();

    res.redirect(`/stations/${station._id}`);
  });
}

function commentsDelete(req, res) {
  Station
  .findById(req.params.stationId)
  .exec()
  .then(station => {
    const comment = station.comments.id(req.params.commentId);
    comment.remove();
    station.save();

    res.redirect(`/stations/${station._id}`);
  });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
