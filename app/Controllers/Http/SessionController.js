'use strict'

class SessionController {
  async store ({ request, response, auth }) {
    const { username, senha } = request.all()

    const token = await auth.attempt(username, senha)

    return token
  }
}

module.exports = SessionController
