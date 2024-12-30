const app = require('./app');

app.listen(5001, () => {
  console.log('************************************');
  console.log('\x1b[32m', 'Web server started success!');
  console.log('\x1b[32m', 'Your server is running at http://localhost:5001');
  console.log('************************************');
});
