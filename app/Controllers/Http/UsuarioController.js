'use strict'

const Usuario = use('App/Models/Usuario')

class UsuarioController {
  async store ({ request }) {
    console.log('entrou?')
    const data = request.all()
    const user = await Usuario.create(data)

    return user
  }

  async getUsuarioById ({ request }) {
    console.log('Pegou user?')

    const user = await Usuario.find(2)

    return user
  }
}

module.exports = UsuarioController
