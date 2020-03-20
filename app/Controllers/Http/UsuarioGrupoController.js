/* eslint-disable camelcase */
'use strict'

const UsuarioGrupo = use('App/Models/UsuarioGrupo')

class UsuarioGrupoController {
  async index ({ params }) {
    const { documents_id } = params
    console.log(documents_id)
    const usuariosgrupo = await UsuarioGrupo.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .with('usuario')
      .fetch()

    return usuariosgrupo
  }

  /**
   * Create/save a new usuariogrupo.
   * POST usuariogrupos
   */
  async store ({ request, params }) {
    const { documents_id } = params
    console.log(documents_id)

    const data = request.all()
    const usuariogrupo = await UsuarioGrupo.create({ ...data, iddocumento: documents_id })

    return usuariogrupo
  }

  /**
   * Display a single usuariogrupo.
   * GET usuariogrupos/:id
   */
  async show ({ params }) {
    const { id } = params
    const usuariogrupo = await UsuarioGrupo.findOrFail(id)

    return usuariogrupo
  }

  /**
   * Update usuariogrupo details.
   */
  async update ({ params, request }) {
    const { id } = params
    const usuariogrupo = await UsuarioGrupo.findOrFail(id)
    const data = request.all()

    usuariogrupo.merge(data)
    await usuariogrupo.save()

    return usuariogrupo
  }

  /**
   * Delete a usuariogrupo with id.
   */
  async destroy ({ params }) {
    const { id } = params
    const usuariogrupo = await UsuarioGrupo.findOrFail(id)

    await usuariogrupo.delete()
  }
}

module.exports = UsuarioGrupoController
