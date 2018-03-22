exports.seed = async (knex, Promise) => {

  await knex('users').del();

  await knex('users').insert({
    name: 'Mega User',
    email: 'www@example.com',
    age: 17,
    active: false
  });

  await knex('users').insert({
    name: 'Suppa User',
    email: 'zzzz@example.com',
    age: 27,
    active: false
  });
};
