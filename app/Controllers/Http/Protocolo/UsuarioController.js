const Usuario = use('App/Models/Protocolo/Usuario');
// const formatarCPF = require('../../../../lib/formatarCPF');

class UsuarioController {
  async index({ response }) {
    const users = await Usuario.all();

    return response.json({
      users,
    });
  }

  //   async store({ request, response }) {
  //     const data = request.all();

  //     const cpf = formatarCPF(data.cpfusuario);

  //     const userExists = await Usuario.findBy({
  //       cpfusuario: cpf,
  //     });

  //     if (userExists) {
  //       return response.status(400).json({ error: 'CPF já cadastrado!' });
  //     }

  //     const user = await Usuario.create(data);

  //     return response.json({
  //       user,
  //     });
  //   }

  //   async getUsuarioById({ params, response }) {
  //     const { idusuario } = params;

  //     const user = await Usuario.find(idusuario);

  //     return response.json({
  //       user,
  //     });
  //   }

  //   async update({ request, response }) {}

  //   async destroy({ params }) {
  //     const { id } = params;
  //     const users = await Usuario.findOrFail(id);

  //     await users.delete();
  //   }
}

module.exports = UsuarioController;
