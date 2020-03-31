'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grupo extends Model {
  usuarioGrupo () {
    return this.hasMany('Models')
  }

  static get table () {
    return 'arq_grupo'
  }

  static get primaryKey () {
    return 'idgrupo'
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

module.exports = Grupo
