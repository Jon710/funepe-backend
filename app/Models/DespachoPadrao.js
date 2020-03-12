'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DespachoPadrao extends Model {
  despachos () {
    return this.hasMany('App/Models/Despacho')
  }
}

module.exports = DespachoPadrao
