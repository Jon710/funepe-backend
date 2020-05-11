/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Fornecedor = use('App/Models/Compras/Fornecedor');

class FornecedorController {
  async index({ response }) {
    const fornecedores = await Fornecedor.all();

    return response.json({
      fornecedores,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const fornecedor = await Fornecedor.create(data);

    return response.json({
      fornecedor,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const fornecedor = await Fornecedor.findOrFail(id);

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

  async destroy({ params, response }) {
    const { id } = params;
    const fornecedor = await Fornecedor.findOrFail(id);

    await fornecedor.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = FornecedorController;
