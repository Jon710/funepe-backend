'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
  gruposUsuario () {
    return this.hasMany('App/Models/UsuarioGrupo')
  }

  funcao () {
    return this.belongsTo('App/Models/Funcao')
  }

  caixasEntrada () {
    return this.hasMany('App/Models/CaixaEntrada')
  }

  documentos () {
    return this.hasMany('App/Models/Documento')
  }

  despachos () {
    return this.hasMany('App/Models/Despacho')
  }

  static get table () {
    return 'arq_usuario'
  }

  static get primaryKey () {
    return 'idusuario'
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

module.exports = Usuario
