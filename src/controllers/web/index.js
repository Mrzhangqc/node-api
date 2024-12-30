const app = require('express')();

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

module.exports = app;
