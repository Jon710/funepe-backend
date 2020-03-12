'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcao extends Model {
  usuarios () {
    return this.hasMany('App/Models/Usuario')
  }
}

module.exports = Funcao
