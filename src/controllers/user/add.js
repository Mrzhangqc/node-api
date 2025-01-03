const app = require('express')();

const dbService = require('@config/service');

app.post('/', async (req, res) => {
  try {
    await dbService.insertOne('user', { name: 'Alice', age: 25 });
    res.send_res('OK');
  } catch (e) {
    // 处理失败的逻辑，第一个参数为msg，第二个参数为状态码
    res.send_error('服务器错误', 500);
  }
});

module.exports = app;
