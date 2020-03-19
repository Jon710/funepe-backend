'use strict'

const User = use('App/Models/User')
// só marcar q esse ta feito
class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
