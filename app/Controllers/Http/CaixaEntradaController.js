/* eslint-disable camelcase */
'use strict'

const CaixaEntrada = use('App/Models/CaixaEntrada')

class CaixaEntradaController {
  /**
   * Show a list of all caixaentradas.
   * GET caixaentradas
   */
  async index ({ params }) {
    const { documents_id } = params
    console.log(documents_id)
    const caixaentradas = await CaixaEntrada.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .with('usuario')
      .fetch()

    return caixaentradas
  }

  /**
   * Create/save a new caixaentrada.
   * POST caixaentradas
   */
  async store ({ request, params }) {
    const { documents_id } = params
    const data = request.all()
    const caixaentrada = await CaixaEntrada.create({ ...data, iddocumento: documents_id })

    return caixaentrada
  }

  /**
   * Display a single caixaentrada.
   * GET caixaentradas/:id
   */
  async show ({ params }) {
    const { id } = params
    const caixaentrada = await CaixaEntrada.findOrFail(id)

    return caixaentrada
  }

  /**
   * Update caixaentrada details.
   * PUT or PATCH caixaentradas/:id
   */
  async update ({ params, request }) {
    const { id } = params
    console.log(id)
    const caixaentrada = await CaixaEntrada.findOrFail(id)
    console.log(caixaentrada)
    const data = request.all()

    caixaentrada.merge(data)
    await caixaentrada.save()

    return caixaentrada
  }

  async destroy ({ params }) {
    const { id } = params
    const caixaentrada = await CaixaEntrada.findOrFail(id)

    await caixaentrada.delete()
  }
}

module.exports = CaixaEntradaController
