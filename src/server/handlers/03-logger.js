if (process.env.NODE_ENV === 'test') {
  exports.init = () => false;
} else {
  const logger = require('koa-logger');
  exports.init = app => app.use(logger());
}
