'use strict'
const TipoDocumento = use('App/Models/TipoDocumento')

class TipoDocumentoController {
  /**
   * Show a list of all tipodocumentos.
   * GET tipodocumentos
   */
  async index () {
    const types = await TipoDocumento.all()
    return types
  }

  /**
   * Create/save a new tipodocumento.
   * POST tipodocumentos
   */
  async store ({ request }) {
    const data = request.all()

    const type = await TipoDocumento.create(data)

    return type
  }

  /**
   * Display a single tipodocumento.
   * GET tipodocumentos/:id
   */
  async show ({ params }) {
    const { id } = params

    const type = await TipoDocumento.findOrFail(id)

    return type
  }

  /**
   * Update tipodocumento details.
   * PUT or PATCH tipodocumentos/:id
   */
  async update ({ params, request }) {
    const { id } = params
    const type = await TipoDocumento.findOrFail(id)
    const data = request.all()

    type.merge(data)
    await type.save()

    return type
  }

  /**
   * Delete a tipodocumento with id.
   * DELETE tipodocumentos/:id
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    const type = await TipoDocumento.findOrFail(id)

    await type.delete()
  }
}

module.exports = TipoDocumentoController
