const Station = require('../models/station');
const lines = [
  'Circle',
  'District',
  'Hammersmith and City',
  'Metropolitan',
  'Bakerloo',
  'Central',
  'Jubilee',
  'Northern',
  'Piccadilly',
  'Victoria',
  'Waterloo and City',
  'London Overground',
  'TfL Rail',
  'DLR',
  'Tram'
];

function stationsIndex(req, res, next) {
  Station
    .find()
    .then((stations) => {
      for (let station of stations) {
        console.log(station.name);
      }
      res.render('stations/index', { stations });
    })
    .catch(next);
}

function stationsNew(req, res) {
  res.render('stations/new', { lines });
}

function stationsCreate(req, res, next) {
  req.body.createdBy = req.user._id;

  Station
    .create(req.body)
    .then(() => res.redirect('/stations'))
    .catch(next);
}

function stationsShow(req, res, next) {
  Station
    .findById(req.params.id)
    .populate('createdBy comments.user')
    .exec()
    .then((station) => {
      if(!station) return res.status(404).render('statics/404');
      res.render('stations/show', { station });
    })
    .catch(next);
}

function stationsEdit(req, res, next) {
  Station
    .findById(req.params.id)
    .then((station) => {
      if(!station) return res.status(404).render('statics/404');
      res.render('stations/edit', { station, lines });
    })
    .catch(next);
}

function stationsUpdate(req, res, next) {
  Station
    .findById(req.params.id)
    .then((station) => {
      if(!station) return res.status(404).render('statics/404');

      for(const field in req.body) {
        station[field] = req.body[field];
      }

      return station.save();
    })
    .then((station) => res.redirect(`/stations/${station.id}`))
    .catch(next);
}

function stationsDelete(req, res, next) {
  Station
    .findById(req.params.id)
    .then((station) => {
      if(!station) return res.status(404).render('statics/404');
      return station.remove();
    })
    .then(() => res.redirect('/stations'))
    .catch(next);
}

module.exports = {
  index: stationsIndex,
  new: stationsNew,
  create: stationsCreate,
  show: stationsShow,
  edit: stationsEdit,
  update: stationsUpdate,
  delete: stationsDelete
};
