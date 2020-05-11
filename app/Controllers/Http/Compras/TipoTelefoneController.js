/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const TipoTelefone = use('App/Models/Compras/TipoTelefone');

class TipoTelefoneController {
  async index({ response }) {
    const tipostelefone = await TipoTelefone.all();

    return response.json({
      tipostelefone,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const tipotelefone = await TipoTelefone.create(data);

    return response.json({
      tipotelefone,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const tipotelefone = await TipoTelefone.findOrFail(id);

    return response.json({
      tipotelefone,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const tipotelefone = await TipoTelefone.findOrFail(id);
    const data = request.all();

    tipotelefone.merge(data);
    await tipotelefone.save();

    return response.json({
      tipotelefone,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const tipotelefone = await TipoTelefone.findOrFail(id);

    await tipotelefone.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = TipoTelefoneController;
