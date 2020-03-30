const Usuario = use('App/Models/Usuario');

class UsuarioController {
  async index() {
    // console.log(request);
    const users = await Usuario.all();

    return users;
  }

  async store({ request }) {
    // console.log('entrou?');
    const data = request.all();
    const user = await Usuario.create(data);

    return user;
  }

  async getUsuarioById({ params }) {
    // console.log('Pegou user?');

    const { idusuario } = params;
    // console.log('Qual usuario?', idusuario);
    const user = await Usuario.find(idusuario);

    return user;
  }

  async destroy({ params }) {
    const { id } = params;
    const users = await Usuario.findOrFail(id);

    await users.delete();
  }
}

module.exports = UsuarioController;
