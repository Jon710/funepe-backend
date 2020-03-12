'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CaixaEntrada extends Model {
  usuario () {
    return this.belongsTo('App/Models/Usuario')
  }

  documento () {
    return this.belongsTo('App/Models/Documento')
  }

  static get table () {
    return 'proto_caixaentrada'
  }

  static get primaryKey () {
    'idcaixaentrada'
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

module.exports = CaixaEntrada
