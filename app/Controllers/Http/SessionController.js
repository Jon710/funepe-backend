'use strict'

class SessionController {
  async store ({ request, auth }) {
    const { username, senha } = request.only([
      'username',
      'senha'
    ]);

    const token = await auth.attempt(username, senha)

    return token
  }
}

module.exports = SessionController
