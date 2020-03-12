'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoDocumento extends Model {
  documentos () {
    return this.hasMany('App/Models/Documento')
  }
}

module.exports = TipoDocumento
