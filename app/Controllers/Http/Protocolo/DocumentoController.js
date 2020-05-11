/* eslint-disable camelcase */
const Documento = use('App/Models/Protocolo/Documento');

class DocumentoController {
  async index({ params, response }) {
    const { usuarios_id } = params;

    const documentos = await Documento.query()
      .where('idexpedidor', usuarios_id)
      .with('prioridade')
      .with('usuario')
      .with('tipoDocumento')
      .fetch();

    return response.json({
      documentos,
    });
  }

  async store({ params, request, response }) {
    const { usuarios_id } = params;
    const data = request.all();
    const documento = await Documento.create({
      ...data,
      idexpedidor: usuarios_id,
    });

    return response.json({
      documento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const document = await Documento.findOrFail(id);

    return response.json({
      document,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const document = await Documento.findOrFail(id);
    const data = request.all();

    document.merge(data);

    await document.save();

    return response.json({
      document,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const document = await Documento.findOrFail(id);

    await document.delete();
  }
}

module.exports = DocumentoController;
