require('module-alias/register');

const express = require('express');

const router = express.Router();
const allRoutes = require('./routers');

const resAPI = require('./middlewares/response');

const app = express();

// 处理url参数
app.use(express.urlencoded({ extended: false }));
// 处理body参数
app.use(express.json());

// 接口返回封装
app.use(resAPI);

// 指定html模板解析引擎
app
  .set('view engine', 'ejs')
  .engine('html', require('ejs').__express);

// 导入路由
allRoutes.forEach((route) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  app.use(route.path, require(route.component));
});
app.use(router);

module.exports = app;
