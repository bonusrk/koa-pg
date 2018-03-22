const Router = require('koa-router');
const queries = require('../db/queries/users');

const router = new Router();

router.get('/users/:id', async (ctx) => {
  try {
    const result = await queries.getSingleUser(ctx.params.id);
    ctx.body = {
      data: result[0]
    };
  } catch (err) {
    console.log(err);
  }
});

router.get('/users', async (ctx) => {
  try {
    const result = await queries.getAllUsers();
    ctx.body = {
      data: result
    };
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
