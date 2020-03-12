'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Documento extends Model {
  usuario () {
    return this.belongsTo('App/Models/Usuario')
  }

  caixaEntradas () {
    return this.hasMany('App/Models/CaixaEntrada')
  }

  arquivosAnexo () {
    return this.hasMany('App/Models/ArquivoAnexo')
  }

  tipoDocumento () {
    return this.belongsTo('App/Models/TipoDocumento')
  }

  prioridade () {
    return this.belongsTo('App/Models/Prioridade')
  }

  static get table () {
    return 'proto_documento'
  }

  static get primaryKey () {
    return 'iddocumento'
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

module.exports = Documento
