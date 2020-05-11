/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const TipoFornecedor = use('App/Models/Compras/TipoFornecedor');

class TipoFornecedorController {
  async index({ response }) {
    const tiposfornecedor = await TipoFornecedor.all();

    return response.json({
      tiposfornecedor,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const tipofornecedor = await TipoFornecedor.create(data);

    return response.json({
      tipofornecedor,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const tipofornecedor = await TipoFornecedor.findOrFail(id);

    return response.json({
      tipofornecedor,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const tipofornecedor = await TipoFornecedor.findOrFail(id);
    const data = request.all();

    tipofornecedor.merge(data);
    await tipofornecedor.save();

    return response.json({
      tipofornecedor,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const tipofornecedor = await TipoFornecedor.findOrFail(id);

    await tipofornecedor.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = TipoFornecedorController;
