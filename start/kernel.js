/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server');

/*
| Global middleware are executed on each http request only when the routes
| match.
*/
const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'App/Middleware/ConvertEmptyStringsToNull',
];

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  guest: 'Adonis/Middleware/AllowGuestOnly',
  guard: 'Cerberus/Middleware/Guard',
};

/*
| Server level middleware are executed even when route for a given URL is
| not registered. Features like `static assets` and `cors` needs better
| control over request lifecycle.
*/
const serverMiddleware = ['Adonis/Middleware/Static', 'Adonis/Middleware/Cors'];

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware);
