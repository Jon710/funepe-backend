'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DespachoPadrao extends Model {
  despachos () {
    return this.hasMany('App/Models/Despacho')
  }

  static get table () {
    return 'proto_despachopadrao'
  }

  static get primaryKey () {
    return 'idpadrao'
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

module.exports = DespachoPadrao
