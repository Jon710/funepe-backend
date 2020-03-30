/* eslint-disable camelcase */
'use strict'

const ArquivoAnexo = use('App/Models/ArquivoAnexo')

class ArquivoAnexoController {
  async index ({ params }) {
    const { documents_id } = params
    console.log(documents_id)
    const arquivosanexo = await ArquivoAnexo.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .fetch()

    return arquivosanexo
  }

  /**
   * Create/save a new arquivoanexo.
   */
  async store ({ request, params }) {
    const { documents_id } = params
    console.log(documents_id)

    const data = request.all()
    const arquivoanexo = await ArquivoAnexo.create({ ...data, iddocumento: documents_id })

    return arquivoanexo
  }

  /**
   * Display a single arquivoanexo.
   */
  async show ({ params }) {
    const { id } = params
    const arquivoanexo = await ArquivoAnexo.findOrFail(id)

    return arquivoanexo
  }

  /**
   * Update arquivoanexo details.
   */
  async update ({ params, request }) {
    const { id } = params
    const arquivoanexo = await ArquivoAnexo.findOrFail(id)
    const data = request.all()

    arquivoanexo.merge(data)
    await arquivoanexo.save()

    return arquivoanexo
  }

  /**
   * Delete a arquivoanexo with id.
   */
  async destroy ({ params }) {
    const { id } = params
    const arquivoanexo = await ArquivoAnexo.findOrFail(id)

    await arquivoanexo.delete()
  }
}

module.exports = ArquivoAnexoController
