/* eslint-disable camelcase */
'use strict'

const Documento = use('App/Models/Documento')

class DocumentoController {
  async index ({ params }) {
    const { usuarios_id } = params
    console.log(usuarios_id)
    const documentos = await Documento.query()
      .where('idexpedidor', usuarios_id)
      .with('prioridade')
      .with('usuario')
      .with('tipoDocumento')
      .fetch()

    return documentos
  }

  /**
   * Create/save a new documento.
   * POST documentos
   */
  async store ({ params, request }) {
    const { usuarios_id } = params
    const data = request.all()
    const documento = await Documento.create({ ...data, idexpedidor: usuarios_id })

    return documento
  }

  async show ({ params }) {
    const { id } = params
    console.log('ID Doc', id)

    const document = await Documento.findOrFail(id)

    return document
  }

  /**
   * Update documento details.
   * PUT or PATCH documentos/:id
   */
  async update ({ params, request }) {
    const { id } = params
    const document = await Documento.findOrFail(id)
    const data = request.all()

    document.merge(data)

    await document.save()

    return document
  }

  /**
   * Delete a documento with id.
   * DELETE documentos/:id
   */
  async destroy ({ params }) {
    const { id } = params
    const document = await Documento.findOrFail(id)

    await document.delete()
  }
}

module.exports = DocumentoController
