const TipoDocumento = use('App/Models/Protocolo/TipoDocumento');

class TipoDocumentoController {
  async index({ response }) {
    const types = await TipoDocumento.all();
    return response.json({
      types,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const type = await TipoDocumento.create(data);

    return response.json({
      type,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const type = await TipoDocumento.findOrFail(id);

    return response.json({
      type,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const type = await TipoDocumento.findOrFail(id);
    const data = request.all();

    type.merge(data);
    await type.save();

    return response.json({
      type,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const type = await TipoDocumento.findOrFail(id);

    await type.delete();
    return response.json({
      message: 'Excluído com sucesso.',
    });
  }
}

module.exports = TipoDocumentoController;
