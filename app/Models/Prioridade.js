'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prioridade extends Model {
  documentos () {
    return this.hasMany('App/Models/Documento')
  }

  static get table () {
    return 'proto_prioridade'
  }

  static get primaryKey () {
    return 'idprioridade'
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

module.exports = Prioridade
