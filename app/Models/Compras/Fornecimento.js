/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Fornecimento extends Model {
  fornecedor() {
    return this.hasMany('App/Models/Compras/Fornecedor');
  }

  produto() {
    return this.belongsTo(
      'App/Models/Compras/Produto',
      'idproduto',
      'idproduto'
    );
  }

  static get table() {
    return 'comp_fornecimento';
  }

  static get primaryKey() {
    return 'idfornecimento';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Fornecimento;
