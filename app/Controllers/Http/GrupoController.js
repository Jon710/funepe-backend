const Grupo = use('App/Models/Grupo');

class GrupoController {
  async index({ response }) {
    const groups = await Grupo.all();
    return response.json({
      groups,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const group = await Grupo.findOrFail(id);

    return response.json({
      group,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const group = await Grupo.create(data);

    return response.json({
      group,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const group = await Grupo.findOrFail(id);
    const data = request.all();

    group.merge(data);
    await group.save();

    return response.json({
      group,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const group = await Grupo.findOrFail(id);

    await group.delete();
  }
}

module.exports = GrupoController;
