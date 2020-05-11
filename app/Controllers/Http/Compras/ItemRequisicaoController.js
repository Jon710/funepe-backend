/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ItemRequisicao = use('App/Models/Compras/ItemRequisicao');

class ItemRequisicaoController {
  async index({ response }) {
    const itensrequisicao = await ItemRequisicao.all();

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

    const empresa = await Empresa.findOrFail(id);

    return response.json({
      empresa,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const itemrequisicao = await ItemRequisicao.findOrFail(id);
    const data = request.all();

    itemrequisicao.merge(data);
    await itemrequisicao.save();

    return response.json({
      itemrequisicao,
    });
  }

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
