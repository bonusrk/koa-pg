const knex = require('../connection');

const getAllUsers = () => knex('users').select('*');

const getSingleUser = (id) => knex('users').select('*').where({ id: parseInt(id) });

module.exports = {
  getAllUsers,
  getSingleUser,
};
