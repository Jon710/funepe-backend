const Funcao = use('App/Models/Funcao');

class FuncaoController {
  async index({ response }) {
    const roles = await Funcao.all();

    return response.json({
      roles,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const role = await Funcao.create(data);

    return response.json({
      role,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const role = await Funcao.findOrFail(id);

    return response.json({
      role,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const role = await Funcao.findOrFail(id);
    const data = request.all();

    role.merge(data);
    await role.save();

    return response.json({
      role,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const role = await Funcao.findOrFail(id);

    await role.delete();
  }
}

module.exports = FuncaoController;
