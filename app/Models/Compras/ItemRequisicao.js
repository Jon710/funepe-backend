/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemRequisicao extends Model {
  requisicao() {
    return this.belongsTo(
      'App/Models/Compras/Requisicao',
      'idrequisicao',
      'idrequisicao'
    );
  }

  produto() {
    return this.belongsTo(
      'App/Models/Compras/Produto',
      'idproduto',
      'idproduto'
    );
  }

  static get table() {
    return 'comp_itemrequisicao';
  }

  static get primaryKey() {
    return 'iditemrequisicao';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = ItemRequisicao;
