/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EmailEmpresa extends Model {
  empresa() {
    return this.belongsTo(
      'App/Models/Compras/Empresa',
      'idempresa',
      'idempresa'
    );
  }

  static get table() {
    return 'comp_emailempresa';
  }

  static get primaryKey() {
    return 'idemail';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = EmailEmpresa;
