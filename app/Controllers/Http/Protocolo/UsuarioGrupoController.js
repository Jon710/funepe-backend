/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
const UsuarioGrupo = use('App/Models/Protocolo/UsuarioGrupo');

class UsuarioGrupoController {
  async index({ response }) {
    const usuariosgrupo = await UsuarioGrupo.all();
    return response.json({
      usuariosgrupo,
    });
  }

  async store({ request, response }) {
    const data = request.all();
    const usuariogrupo = await UsuarioGrupo.create(data);

    return response.json({
      usuariogrupo,
    });
  }

  async show({ params, response }) {
    const { id } = params;
    const usuariogrupo = await UsuarioGrupo.findOrFail(id);

    return response.json({
      usuariogrupo,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const usuariogrupo = await UsuarioGrupo.findOrFail(id);
    const data = request.all();

    usuariogrupo.merge(data);
    await usuariogrupo.save();

    return response.json({
      usuariogrupo,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const usuariogrupo = await UsuarioGrupo.findOrFail(id);

    await usuariogrupo.delete();
    return response.json({
      message: 'Excluído com sucesso.',
    });
  }
}

module.exports = UsuarioGrupoController;
