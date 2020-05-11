/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Orcamento extends Model {
  fornecedor() {
    return this.belongsTo(
      'App/Models/Compras/Fornecedor',
      'idfornecedor',
      'idfornecedor'
    );
  }

  requisicao() {
    return this.belongsTo(
      'App/Models/Compras/Requisicao',
      'idrequisicao',
      'idrequisicao'
    );
  }

  itemorcamento() {
    return this.hasMany('App/Models/Compras/ItemOrcamento');
  }

  static get table() {
    return 'comp_orcamento';
  }

  static get primaryKey() {
    return 'idorcamento';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Orcamento;
