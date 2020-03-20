'use strict'

const Funcao = use('App/Models/Funcao')

class FuncaoController {
  /**
   * Show a list of all funcaos.
   * GET funcaos
   */
  async index () {
    const roles = await Funcao.all()

    return roles
  }

  /**
   * Create/save a new funcao = role.
   * POST funcaos
   */
  async store ({ request, response }) {
    const data = request.all()

    const role = await Funcao.create(data)

    return role
  }

  /**
   * Display a single funcao.
   * GET funcaos/:id
   */
  async show ({ params }) {
    const { id } = params

    const role = await Funcao.findOrFail(id)

    return role
  }

  /**
   * Update funcao details.
   * PUT or PATCH funcaos/:id
   */
  async update ({ params, request, response }) {
    const { id } = params
    const role = await Funcao.findOrFail(id)
    const data = request.all()

    role.merge(data)
    await role.save()

    return role
  }

  /**
   * Delete a funcao with id.
   * DELETE funcaos/:id
   */
  async destroy ({ params }) {
    const { id } = params
    const role = await Funcao.findOrFail(id)

    await role.delete()
  }
}

module.exports = FuncaoController
