/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UsuarioGrupo extends Model {
  usuario() {
    return this.belongsTo('App/Models/Usuario', 'idusuario', 'idusuario');
  }

  grupo() {
    return this.belongsTo('App/Models/Grupo', 'idgrupo', 'idgrupo');
  }

  static get table() {
    return 'arq_usuariogrupo';
  }

  static get primaryKey() {
    return 'idusuariogrupo';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = UsuarioGrupo;
