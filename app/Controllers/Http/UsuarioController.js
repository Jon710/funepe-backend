'use strict'

const Usuario = use('App/Models/Usuario')

class UsuarioController {
  async index() {
    const users = await Usuario.all()

    return users
  }

  async store({ request }) {
    console.log('entrou?')
    const data = request.all()
    const user = await Usuario.create(data)

    return user
  }

  async getUsuarioById({ params }) {
    console.log('Pegou user?')

    const { idusuario } = params
    console.log('Qual usuario?', idusuario)
    const user = await Usuario.find(idusuario)

    return user
  }

  async getUsuario({ request, params }) {
    console.log('REQUEST', request._all)
    console.log('PARAMS', params.body)

    const { username, senha } = request._all
    console.log('Qual usuario?', username)
    const user = await Usuario.findBy({ username, senha })

    return user
  }
}

module.exports = UsuarioController
