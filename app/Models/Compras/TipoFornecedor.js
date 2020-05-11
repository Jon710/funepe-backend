/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TipoFornecedor extends Model {
  fornecedor() {
    return this.hasMany('App/Models/Compras/Fornecedor');
  }

  static get table() {
    return 'comp_tipofornecedor';
  }

  static get primaryKey() {
    return 'idtipofornecedor';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = TipoFornecedor;
