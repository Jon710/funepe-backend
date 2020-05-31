/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
const UsuarioGrupo = use('App/Models/Protocolo/UsuarioGrupo');

class UsuarioGrupoController {
  // async index({ response }) {
  //   const usuariosgrupo = await UsuarioGrupo.all();
  //   return response.json({
  //     usuariosgrupo,
  //   });
  // }
  // /grupo/:grupo_id/usuariogrupo
  async index({ params, response }) {
    const { grupo_id } = params;

    const usuariosgrupo = await UsuarioGrupo.query()
      .where('idgrupo', grupo_id)
      .with('grupo')
      .with('usuario')
      .fetch();

    return response.json({
      usuariosgrupo,
    });
  }

  // /grupo/:grupo_id/usuariogrupo
  async store({ params, request, response }) {
    const { grupo_id } = params;
    const data = request.all();
    const usuariogrupo = await UsuarioGrupo.create({
      ...data,
      idgrupo: grupo_id,
    });

    return response.json({
      usuariogrupo,
    });
  }

  // /grupo/:grupo_id/usuariogrupo/:id
  async show({ params, response }) {
    const { id } = params;
    const usuariogrupo = await UsuarioGrupo.findOrFail(id);

    return response.json({
      usuariogrupo,
    });
  }

  // /grupo/:grupo_id/usuariogrupo/:id
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

  // /grupo/:grupo_id/usuariogrupo/:id
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
