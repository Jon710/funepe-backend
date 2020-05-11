/* eslint-disable camelcase */
const Despacho = use('App/Models/Protocolo/Despacho');

class DespachoController {
  async index({ params, response }) {
    const { documents_id } = params;

    const despachos = await Despacho.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .with('usuario')
      .fetch();

    return response.json({
      despachos,
    });
  }

  async store({ request, params, response }) {
    const { documents_id } = params;
    const data = request.all();
    const despacho = await Despacho.create({
      ...data,
      iddocumento: documents_id,
    });

    return response.json({
      despacho,
    });
  }

  async show({ params, response }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);

    return response.json({
      despacho,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);
    const data = request.all();

    despacho.merge(data);
    await despacho.save();

    return response.json({
      despacho,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);

    await despacho.delete();
  }
}

module.exports = DespachoController;
