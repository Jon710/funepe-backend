/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const UnidadeMedida = use('App/Models/Compras/UnidadeMedida');

class UnidadeMedidaController {
  async index({ response }) {
    const unidadesmedida = await UnidadeMedida.all();

    return response.json({
      unidadesmedida,
    });
  }

  async store({ request, response }) {
    const data = request.only('descricao');

    const unidademedida = await UnidadeMedida.create(data);

    return response.json({
      unidademedida,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const unidademedida = await UnidadeMedida.findOrFail(id);

    return response.json({
      unidademedida,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const unidademedida = await UnidadeMedida.findOrFail(id);
    const data = request.all();

    unidademedida.merge(data);
    await unidademedida.save();

    return response.json({
      unidademedida,
    });
  }
}

module.exports = UnidadeMedidaController;
