'use strict'

const Env = use('Env')

module.exports = {
  /*
  | Authenticator
  |--------------------------------------------------------------------------
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  */
  authenticator: 'jwt',

  /*
  | Jwt
  |--------------------------------------------------------------------------
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  */
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'jwt',
    uid: 'username',
    password: 'senha',
    options: {
      secret: Env.get('APP_KEY')
    }
  }
}
