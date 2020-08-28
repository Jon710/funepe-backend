const Env = use('Env');

module.exports = {
  authenticator: 'jwt',

  jwt: {
    serializer: 'lucid',
    model: 'App/Models/Protocolo/Usuario',
    scheme: 'jwt',
    uid: 'username',
    password: 'senha',
    options: {
      secret: Env.get('APP_KEY'),
    },
  },
};
