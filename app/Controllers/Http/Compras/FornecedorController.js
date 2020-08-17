/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Fornecedor = use('App/Models/Compras/Fornecedor');

class FornecedorController {
  async index({ response }) {
    const fornecedores = await Fornecedor.query().with('tipofornece').fetch();

    return response.json({
      fornecedores,
    });
  }

  async store({ request, response }) {
    try {
      const data = request.only([
        'idtipofornecedor',
        'ativo',
        'prod_servicos',
        'tipofornecedor',
        'idfornecedor',
      ]);

      const fornecedor = await Fornecedor.create(data);

      return response.json({
        fornecedor,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Erro ao cadastrar fornecedor.' });
    }
  }

  async show({ params, response }) {
    const { id } = params;

    const fornecedor = await Fornecedor.query()
      .where('idfornecedor', id)
      .with('tipofornece')
      .fetch();

    return response.json({
      fornecedor,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const fornecedor = await Fornecedor.findOrFail(id);
    const data = request.all();

    fornecedor.merge(data);
    await fornecedor.save();

    return response.json({
      fornecedor,
    });
  }
}

module.exports = FornecedorController;
