'use strict'

const Model = use('Model')

class Despacho extends Model {
  documento () {
    return this.belongsTo('App/Models/Documento', 'iddocumento', 'iddocumento')
  }

  usuario () {
    return this.belongsTo('App/Models/Usuario', 'idusuario', 'idusuario')
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
