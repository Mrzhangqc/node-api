const app = require('express')();

const dbService = require('../../config/service');

app.get('/', async (req, res) => {
  try {
    const payload = { name: 'Alice' };
    const projection = { _id: 0 };
    const data = await dbService.find('user', payload, { projection });
    res.send_res(data);
  } catch (e) {
    res.send_error('服务器错误', 500);
  }
});

module.exports = app;
