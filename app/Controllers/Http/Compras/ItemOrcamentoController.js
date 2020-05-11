/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ItemOrcamento = use('App/Models/Compras/ItemOrcamento');

class ItemOrcamentoController {
  async index({ response }) {
    const itensorcamento = await ItemOrcamento.all();

    return response.json({
      itensorcamento,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const itemorcamento = await ItemOrcamento.create(data);

    return response.json({
      itemorcamento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const itemorcamento = await ItemOrcamento.findOrFail(id);

    return response.json({
      itemorcamento,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const itemorcamento = await ItemOrcamento.findOrFail(id);
    const data = request.all();

    itemorcamento.merge(data);
    await itemorcamento.save();

    return response.json({
      itemorcamento,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const itemorcamento = await ItemOrcamento.findOrFail(id);

    await itemorcamento.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = ItemOrcamentoController;
