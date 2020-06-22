/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Categoria = use('App/Models/Compras/Categoria');
const ViolatesFkException = use('App/Exceptions/ViolatesFkException');

class CategoriaController {
  async index({ response }) {
    const categorias = await Categoria.all();

    return response.json({
      categorias,
    });
  }

  async store({ request, response }) {
    try {
      const data = request.only('categoria');

      const categoria = await Categoria.create(data);

      return response.json({
        categoria,
      });
    } catch (err) {
      throw new ViolatesFkException();
    }
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
    try {
      const { id } = params;
      const categoria = await Categoria.findOrFail(id);

      await categoria.delete();
      return response.json({
        message: 'Excluído com Sucesso!',
      });
    } catch (err) {
      throw new ViolatesFkException();
    }
  }
}

module.exports = CategoriaController;
