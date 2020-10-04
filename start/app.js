// const path = require('path');

const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/vow/providers/VowProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/antl/providers/AntlProvider',
  '@adonisjs/drive/providers/DriveProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@quantumlabs/adonisjs-cerberus/providers/CerberusProvider',

  // path.join(__dirname, '..', 'providers', 'CustomValidationProvider'),
];

/*
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  '@adonisjs/vow/providers/VowProvider',
  '@quantumlabs/adonisjs-cerberus/providers/CommandsProvider',
];

const aliases = {};

const commands = [];

module.exports = {
  providers,
  aceProviders,
  aliases,
  commands,
};
