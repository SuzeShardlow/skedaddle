function staticsHomepage(req, res) {
  res.render('statics/homepage');
}

module.exports = {
  homepage: staticsHomepage
};
