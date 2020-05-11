/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Requisicao = use('App/Models/Compras/Requisicao');

class RequisicaoController {
  async index({ response }) {
    const requisicoes = await Requisicao.all();

    return response.json({
      requisicoes,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const requisicao = await Requisicao.create(data);

    return response.json({
      requisicao,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const requisicao = await Requisicao.findOrFail(id);

    return response.json({
      requisicao,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const requisicao = await Requisicao.findOrFail(id);
    const data = request.all();

    requisicao.merge(data);
    await requisicao.save();

    return response.json({
      requisicao,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const requisicao = await Requisicao.findOrFail(id);

    await requisicao.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = RequisicaoController;
