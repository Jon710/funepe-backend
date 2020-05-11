/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EnderecoFornecedor extends Model {
  fornecedor() {
    return this.belongsTo(
      'App/Models/Compras/Fornecedor',
      'idfornecedor',
      'idfornecedor'
    );
  }

  static get table() {
    return 'comp_enderecofornecedor';
  }

  static get primaryKey() {
    return 'idendereco';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = EnderecoFornecedor;
