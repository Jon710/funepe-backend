/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Fornecedor extends Model {
  telefonefavorecido() {
    return this.hasMany('App/Models/Compras/TelefoneFavorecido');
  }

  tipofornece() {
    return this.belongsTo(
      'App/Models/Compras/TipoFornecedor',
      'idtipofornecedor',
      'idtipofornecedor'
    );
  }

  orcamento() {
    return this.hasMany('App/Models/Compras/Orcamento');
  }

  enderecofornecedor() {
    return this.hasMany('App/Models/Compras/EnderecoFornecedor');
  }

  fornecimento() {
    return this.hasMany('App/Models/Compras/Fornecimento');
  }

  emailfornecedor() {
    return this.hasMany('App/Models/Compras/EmailFornecedor');
  }

  static get table() {
    return 'comp_fornecedor';
  }

  static get primaryKey() {
    return 'idfornecedor';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Fornecedor;
