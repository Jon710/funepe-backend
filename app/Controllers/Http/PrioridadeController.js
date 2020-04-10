/* eslint-disable camelcase */

const Prioridade = use('App/Models/Prioridade');

class PrioridadeController {
  async index({ response }) {
    const prioridades = await Prioridade.all();

    return response.json({
      prioridades,
    });
  }

  async store({ request, response }) {
    const data = request.all();
    const prioridade = await Prioridade.create(data);

    return response.json({
      prioridade,
    });
  }

  async show({ params, response }) {
    const { id } = params;
    const prioridade = await Prioridade.findOrFail(id);

    return response.json({
      prioridade,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const prioridade = await Prioridade.findOrFail(id);
    const data = request.all();

    prioridade.merge(data);
    await prioridade.save();

    return response.json({
      prioridade,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const prioridade = await Prioridade.findOrFail(id);

    await prioridade.delete();
  }
}

module.exports = PrioridadeController;
