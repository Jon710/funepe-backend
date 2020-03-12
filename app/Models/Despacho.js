'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Despacho extends Model {
  caixaEntrada () {
    return this.belongsTo('App/Models/CaixaEntrada')
  }

  despachoPadrao () {
    return this.belongsTo('App/Models/Despacho')
  }

  despacho () {
    return this.belongsTo('App/Models/Usuario')
  }

  static get table () {
    return 'proto_despacho'
  }

  static get primaryKey () {
    return 'iddespacho'
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

module.exports = Despacho
