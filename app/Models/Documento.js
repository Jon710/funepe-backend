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
}

module.exports = Documento
