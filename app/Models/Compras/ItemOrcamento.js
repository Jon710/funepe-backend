/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemOrcamento extends Model {
  produto() {
    return this.belongsTo(
      'App/Models/Compras/Produto',
      'idproduto',
      'idproduto'
    );
  }

  orcamento() {
    return this.belongsTo(
      'App/Models/Compras/Orcamento',
      'idorcamento',
      'idorcamento'
    );
  }

  static get table() {
    return 'comp_itemorcamento';
  }

  static get primaryKey() {
    return 'iditemorcamento';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = ItemOrcamento;
