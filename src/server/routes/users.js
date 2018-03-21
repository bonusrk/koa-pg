const Router = require('koa-router');
const queries = require('../db/queries/users');

const router = new Router();

router.get('/users', async (ctx) => {
  try {
    const users = await queries.getAllUsers();
    ctx.body = {
      status: 'success',
      data: users
    };
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
