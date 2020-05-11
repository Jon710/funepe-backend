/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Categoria = use('App/Models/Compras/Categoria');

class CategoriaController {
  async index({ response }) {
    const categoria = await Categoria.all();

    return response.json({
      categoria,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const categoria = await Categoria.create(data);

    return response.json({
      categoria,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const categoria = await Categoria.findOrFail(id);

    return response.json({
      categoria,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const categoria = await Categoria.findOrFail(id);
    const data = request.all();

    categoria.merge(data);
    await categoria.save();

    return response.json({
      categoria,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const categoria = await Categoria.findOrFail(id);

    await categoria.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = CategoriaController;
