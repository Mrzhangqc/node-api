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
    path: '/api/user/add',
    component: './controllers/user/add.js',
  },
  {
    path: '/api/user/list',
    component: './controllers/user/query.js',
  },
  {
    path: '*',
    component: './controllers/web/404',
  },
];
module.exports = routes;
