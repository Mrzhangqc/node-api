const app = require('express')();

/**
 * GET /api/test/get
 * @tags api示例
 * @summary GET请求示例
 * @description GET请求示例
 * @param {string} username.query.required
 */
app.get('/', (req, res) => {
  try {
    // 从query中获取字段
    const { username } = req.query;
    // 处理成功的逻辑，返回结果，格式自定
    res.send_res(`Hello, ${username}`);
  } catch (e) {
    // 处理失败的逻辑，第一个参数为msg，第二个参数为状态码
    res.send_error('服务器错误', 500);
  }
});

module.exports = app;
