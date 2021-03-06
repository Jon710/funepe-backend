/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TelefoneEmpresa extends Model {
  empresa() {
    return this.belongsTo(
      'App/Models/Compras/Empresa',
      'idempresa',
      'idempresa'
    );
  }

  tipotelefone() {
    return this.belongsTo(
      'App/Models/Compras/TipoTelefone',
      'idtipotelefone',
      'idtipotelefone'
    );
  }

  static get table() {
    return 'comp_telefoneempresa';
  }

  static get primaryKey() {
    return 'idtelefone';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = TelefoneEmpresa;
