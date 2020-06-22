/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

module.exports = {
  connection: Env.get('DB_CONNECTION', 'pg'),

  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', ''),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', ''),
    },
    debug: Env.get('DB_DEBUG', false),
  },

  // sqlite: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: './adonis.sqlite',
  //   },
  // },
};
