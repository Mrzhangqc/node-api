module.exports = function responseMiddleware(req, res, next) {
  res.set('Content-Type', 'application/json');

  // 正常返回结果
  res.send_res = (data, msg = 'success') => {
    const json = {
      msg,
      data,
      code: 200,
    };
    return res.json(json);
  };
  // 处理出错结果
  res.error_res = (msg, code, data = null) => {
    const json = {
      msg,
      data,
      code,
    };
    return res.json(json);
  };
  next();
};
