'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioGrupo extends Model {
  usuario () {
    return this.belongsTo('App/Models/Usuario')
  }

  grupo () {
    return this.belongsTo('App/Models/Grupo')
  }

  static get table () {
    return 'arq_usuariogrupo'
  }

  static get primaryKey () {
    return 'idusuariogrupo'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  static get incrementing () {
    return false
  }
}

module.exports = UsuarioGrupo
