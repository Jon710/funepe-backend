'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grupo extends Model {
  usuarioGrupo () {
    return this.hasMany('Models')
  }
}

module.exports = Grupo
