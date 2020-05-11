/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const HistoricoRequisicao = use('App/Models/Compras/HistoricoRequisicao');

class HistoricoRequisicaoController {
  async index({ response }) {
    const historicosrequisicao = await HistoricoRequisicao.all();

    return response.json({
      historicosrequisicao,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const historicorequisicao = await HistoricoRequisicao.create(data);

    return response.json({
      historicorequisicao,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const historicorequisicao = await HistoricoRequisicao.findOrFail(id);

    return response.json({
      historicorequisicao,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const historicorequisicao = await HistoricoRequisicao.findOrFail(id);
    const data = request.all();

    historicorequisicao.merge(data);
    await historicorequisicao.save();

    return response.json({
      historicorequisicao,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const historicorequisicao = await HistoricoRequisicao.findOrFail(id);

    await historicorequisicao.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = HistoricoRequisicaoController;
