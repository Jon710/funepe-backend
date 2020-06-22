/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Marca = use('App/Models/Compras/Marca');

class MarcaController {
  async index({ response }) {
    const marcas = await Marca.all();

    return response.json({
      marcas,
    });
  }

  async store({ request, response }) {
    const data = request.only('descricao');

    const marca = await Marca.create(data);

    return response.json({
      marca,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const marca = await Marca.findOrFail(id);

    return response.json({
      marca,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const marca = await Marca.findOrFail(id);
    const data = request.all();

    marca.merge(data);
    await marca.save();

    return response.json({
      marca,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const marca = await Marca.findOrFail(id);

    await marca.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = MarcaController;
