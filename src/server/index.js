'use strict';
const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const app = new Koa();

const config = require('config');

app.keys = [config.get('secret')];

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

app.use(indexRouter.routes());
app.use(usersRouter.routes());

app.listen(config.get('port'), () => {
  console.log(`App running on http://localhost:${config.get('port')}`);
});

module.exports = app;
