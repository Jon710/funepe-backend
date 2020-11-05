/* eslint-disable camelcase */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ItemRequisicao = use('App/Models/Compras/ItemRequisicao');

class ItemRequisicaoController {
  // /requisicao/:requisicao_id/itemrequisicao
  async index({ response, params }) {
    const { requisicao_id } = params;

    const itensrequisicao = await ItemRequisicao.query()
      .where('idrequisicao', requisicao_id)
      .with('requisicao')
      .with('produto')
      .with('produto.unidademedida')
      .fetch();

    return response.json({
      itensrequisicao,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const itemrequisicao = await ItemRequisicao.create(data);

    return response.json({
      itemrequisicao,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const itemrequisicao = await ItemRequisicao.findOrFail(id);

    return response.json({
      itemrequisicao,
    });
  }

  // /requisicao/:requisicao_id/itemrequisicao/:id
  async update({ params, request, response }) {
    const { id } = params;
    const itemrequisicao = await ItemRequisicao.findOrFail(id);
    const data = request.only(['observacao']);

    itemrequisicao.merge(data);
    await itemrequisicao.save();

    return response.json({
      itemrequisicao,
    });
  }

  // /requisicao/:requisicao_id/itemrequisicao/:id
  async destroy({ params, response }) {
    const { id } = params;
    const itemrequisicao = await ItemRequisicao.findOrFail(id);

    await itemrequisicao.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = ItemRequisicaoController;
