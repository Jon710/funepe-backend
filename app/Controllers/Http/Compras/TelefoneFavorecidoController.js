/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const TelefoneFavorecido = use('App/Models/Compras/TelefoneFavorecido');

class TelefoneFavorecidoController {
  async index({ response }) {
    const telefonesfavorecido = await TelefoneFavorecido.all();

    return response.json({
      telefonesfavorecido,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const telefonefavorecido = await TelefoneFavorecido.create(data);

    return response.json({
      telefonefavorecido,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const telefonefavorecido = await TelefoneFavorecido.findOrFail(id);

    return response.json({
      telefonefavorecido,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const telefonefavorecido = await TelefoneFavorecido.findOrFail(id);
    const data = request.all();

    telefonefavorecido.merge(data);
    await telefonefavorecido.save();

    return response.json({
      telefonefavorecido,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const telefonefavorecido = await TelefoneFavorecido.findOrFail(id);

    await telefonefavorecido.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = TelefoneFavorecidoController;
