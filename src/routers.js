const routes = [
  {
    path: '/',
    component: './controllers/web/index.js',
  },
  {
    path: '/api/test/get',
    component: './controllers/api-test/get.js',
  },
  {
    path: '/api/op/employee',
    component: './controllers/infoservice/employee.js',
  },
  {
    path: '*',
    component: './controllers/web/404',
  },
];
module.exports = routes;
