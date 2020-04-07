const Usuario = use('App/Models/Usuario');

class UsuarioController {
  async index({ response }) {
    const users = await Usuario.all();

    return response.json({
      users,
    });
  }

  async store({ request, response }) {
    const data = request.all();
    const user = await Usuario.create(data);

    return response.json({
      user,
    });
  }

  async getUsuarioById({ params, response }) {
    const { idusuario } = params;
    const user = await Usuario.find(idusuario);

    return response.json({
      user,
    });
  }

  async destroy({ params }) {
    const { id } = params;
    const users = await Usuario.findOrFail(id);

    await users.delete();
  }
}

module.exports = UsuarioController;
