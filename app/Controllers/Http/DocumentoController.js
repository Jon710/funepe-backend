'use strict'

const Document = use('App/Models/Documento')

class DocumentoController {
  async index () {
    const documents = await Document.all()
    console.log(documents)
    return documents
  }

  /**
   * Create/save a new documento.
   * POST documentos
   */
  async store ({ request }) {
    const data = request.all()
    const document = await Document.create(data)

    return document
  }

  async show ({ params }) {
    const { id } = params
    console.log('ID Doc', id)

    const document = await Document.findOrFail(id)

    return document
  }

  /**
   * Update documento details.
   * PUT or PATCH documentos/:id
   */
  async update ({ params, request }) {
    const { id } = params
    const document = await Document.findOrFail(id)
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
    const document = await Document.findOrFail(id)

    await document.delete()
  }
}

module.exports = DocumentoController
