/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Fornecimento = use('App/Models/Compras/Fornecimento');

class FornecimentoController {
  async index({ response }) {
    const fornecimentos = await Fornecimento.all();

    return response.json({
      fornecimentos,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const fornecimento = await Fornecimento.create(data);

    return response.json({
      fornecimento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const fornecimento = await Fornecimento.findOrFail(id);

    return response.json({
      fornecimento,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const fornecimento = await Fornecimento.findOrFail(id);
    const data = request.all();

    fornecimento.merge(data);
    await fornecimento.save();

    return response.json({
      fornecimento,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const fornecimento = await Fornecimento.findOrFail(id);

    await fornecimento.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = FornecimentoController;
