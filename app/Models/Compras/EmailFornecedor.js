/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EmailFornecedor extends Model {
  fornecedor() {
    return this.belongsTo(
      'App/Models/Compras/Fornecedor',
      'idfornecedor',
      'idfornecedor'
    );
  }

  static get table() {
    return 'comp_emailfornecedor';
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

module.exports = EmailFornecedor;
