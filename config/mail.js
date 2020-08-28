const Env = use('Env');

module.exports = {
  connection: Env.get('MAIL_CONNECTION', 'smtp'),

  smtp: {
    driver: 'smtp',
    pool: true,
    port: Env.get('SMTP_PORT', 287),
    host: Env.get('SMTP_HOST'),
    secure: false,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD'),
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10,
  },

  /*
  | Ethereal driver to quickly test emails in your browser. A disposable
  | account is created automatically for you.
  | https://ethereal.email
  */
  ethereal: {
    driver: 'ethereal',
  },
};
