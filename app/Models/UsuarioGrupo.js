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
}

module.exports = UsuarioGrupo
