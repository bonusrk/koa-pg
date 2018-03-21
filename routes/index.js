const Router = require('koa-router');
const router = new Router();

const db = require('db');

router.get('/', (ctx, next) => {
  ctx.body = 'ok';
});

router.get('/db', async (ctx, next) => {
  try {
    const res = await db.query('SELECT NOW()');
    console.log(res);
    await db.query.end();
    ctx.body = res;
  } catch (error) {
    // console.log(error);
    ctx.body(error);
  }
});

module.exports = router;
