const app = require('express')();

app.get('*', (req, res) => {
  res.status(404).render('web/404.html', {
    title: '404',
  });
});
module.exports = app;
