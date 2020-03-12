'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArquivoAnexo extends Model {
  documento () {
    return this.belongsTo('App/Models/Documento')
  }
}

module.exports = ArquivoAnexo
