module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2',
  port: process.env.PORT || 3000
};
