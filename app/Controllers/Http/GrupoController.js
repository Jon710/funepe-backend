const Grupo = use('App/Models/Grupo');

class GrupoController {
  async index() {
    const groups = await Grupo.all();
    return groups;
  }

  async show({ params }) {
    const { id } = params;

    const group = await Grupo.findOrFail(id);

    return group;
  }

  async store({ request }) {
    const data = request.all();

    const group = await Grupo.create(data);

    return group;
  }

  async update({ params, request }) {
    const { id } = params;
    const group = await Grupo.findOrFail(id);
    const data = request.all();

    group.merge(data);
    await group.save();

    return group;
  }

  async destroy({ params }) {
    const { id } = params;
    const group = await Grupo.findOrFail(id);

    await group.delete();
  }
}

module.exports = GrupoController;
