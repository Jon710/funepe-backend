'use strict'

const Grupo = use('App/Models/Grupo')

class GrupoController {
  /**
   * Show a list of all grupos.
   * GET grupos
   */
  async index () {
    const groups = await Grupo.all()
    // console.log(documents)
    return groups
  }

  async show ({ params }) {
    const { id } = params
    // console.log('ID Doc', id)

    const group = await Grupo.findOrFail(id)

    return group
  }

  /**
   * Render a form to be used for creating a new grupo.
   * GET grupos/create
   */
  async store ({ request, response }) {
    const data = request.all()

    const group = await Grupo.create(data)

    return group
  }

  /**
   * Update grupo details.
   * PUT or PATCH grupos/:id
   */
  async update ({ params, request }) {
    const { id } = params
    const group = await Grupo.findOrFail(id)
    const data = request.all()

    group.merge(data)
    await group.save()

    return group
  }

  /**
   * Delete a grupo with id.
   * DELETE grupos/:id
   */
  async destroy ({ params }) {
    const { id } = params
    const group = await Grupo.findOrFail(id)

    await group.delete()
  }
}

module.exports = GrupoController
