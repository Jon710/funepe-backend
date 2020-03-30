const Usuario = use('App/Models/Usuario');

class UsuarioController {
  async index() {
<<<<<<< HEAD
    const users = await Usuario.all()
=======
    const users = await Usuario.all();
>>>>>>> 3ed5c61dd8210f0935929e827e9bae0c21a9506c

    return users;
  }

  async store({ request }) {
<<<<<<< HEAD
    console.log('entrou?')
    const data = request.all()
    const user = await Usuario.create(data)
=======
    console.log('entrou?');
    const data = request.all();
    const user = await Usuario.create(data);

    return user;
  }

  async getUsuarioById({ params }) {
    console.log('Pegou user?');

    const { idusuario } = params;
    console.log('Qual usuario?', idusuario);
    const user = await Usuario.find(idusuario);
>>>>>>> 3ed5c61dd8210f0935929e827e9bae0c21a9506c

    return user;
  }

<<<<<<< HEAD
  async getUsuarioById({ params }) {
    console.log('Pegou user?')
=======
>>>>>>> 3ed5c61dd8210f0935929e827e9bae0c21a9506c

  async destroy ({ params }) {
    const { id } = params
    const users = await Usuario.findOrFail(id)

    await users.delete()
  }

  async getUsuario({ request, params }) {
    console.log('REQUEST', request._all)
    console.log('PARAMS', params.body)

    const { username, senha } = request._all
    console.log('Qual usuario?', username)
    const user = await Usuario.findBy({ username, senha })

    return user
  }
}

module.exports = UsuarioController;
