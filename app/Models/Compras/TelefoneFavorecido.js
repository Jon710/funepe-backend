/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TelefoneFavorecido extends Model {
  tipotelefone() {
    return this.belongsTo(
      'App/Models/Compras/TipoTelefone',
      'idtipotelefone',
      'idtipotelefone'
    );
  }

  fornecedor() {
    return this.belongsTo(
      'App/Models/Compras/Fornecedor',
      'idfornecedor',
      'idfornecedor'
    );
  }

  static get table() {
    return 'comp_telefonefavorecido';
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

module.exports = TelefoneFavorecido;
