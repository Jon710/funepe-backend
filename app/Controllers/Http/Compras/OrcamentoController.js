/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Orcamento = use('App/Models/Compras/Orcamento');

class OrcamentoController {
  async index({ response }) {
    const orcamentos = await Orcamento.all();

    return response.json({
      orcamentos,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const orcamento = await Orcamento.create(data);

    return response.json({
      orcamento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const orcamento = await Orcamento.findOrFail(id);

    return response.json({
      orcamento,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const orcamento = await Orcamento.findOrFail(id);
    const data = request.all();

    orcamento.merge(data);
    await orcamento.save();

    return response.json({
      orcamento,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const orcamento = await Orcamento.findOrFail(id);

    await orcamento.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = OrcamentoController;
