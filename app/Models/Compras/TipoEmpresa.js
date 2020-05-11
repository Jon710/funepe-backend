/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TipoEmpresa extends Model {
  empresa() {
    return this.hasMany('App/Models/Compras/Empresa');
  }

  static get table() {
    return 'comp_tipoempresa';
  }

  static get primaryKey() {
    return 'idtipoempresa';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = TipoEmpresa;
