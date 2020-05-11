/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Produto extends Model {
  unidademedida() {
    return this.belongsTo(
      'App/Models/Compras/UnidadeMedida',
      'idunidade',
      'idunidade'
    );
  }

  marca() {
    return this.belongsTo('App/Models/Compras/Marca', 'idmarca', 'idmarca');
  }

  fornecimento() {
    return this.hasMany('App/Models/Compras/Fornecimento');
  }

  itemrequisicao() {
    return this.hasMany('App/Models/Compras/ItemRequisicao');
  }

  categoria() {
    return this.belongsTo(
      'App/Models/Compras/Categoria',
      'idcategoria',
      'idcategoria'
    );
  }

  itemorcamento() {
    return this.hasMany('App/Models/Compras/ItemOrcamento');
  }

  static get table() {
    return 'proto_caixaentrada';
  }

  static get primaryKey() {
    return 'idcaixaentrada';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Produto;
