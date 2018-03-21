const { Pool } = require('pg');

const pool = new Pool({
  database: 'postgres',
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
