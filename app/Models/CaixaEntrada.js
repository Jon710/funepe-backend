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
}

module.exports = CaixaEntrada
