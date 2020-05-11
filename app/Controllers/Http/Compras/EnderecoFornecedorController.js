/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const EnderecoFornecedor = use('App/Models/Compras/EnderecoFornecedor');

class EnderecoFornecedorController {
  async index({ response }) {
    const enderecosfornecedor = await EnderecoFornecedor.all();

    return response.json({
      enderecosfornecedor,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const enderecofornecedor = await EnderecoFornecedor.create(data);

    return response.json({
      enderecofornecedor,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const enderecofornecedor = await EnderecoFornecedor.findOrFail(id);

    return response.json({
      enderecofornecedor,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const enderecofornecedor = await EnderecoFornecedor.findOrFail(id);
    const data = request.all();

    enderecofornecedor.merge(data);
    await enderecofornecedor.save();

    return response.json({
      enderecofornecedor,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const enderecofornecedor = await EnderecoFornecedor.findOrFail(id);

    await enderecofornecedor.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = EnderecoFornecedorController;
