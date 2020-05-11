/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UnidadeMedida extends Model {
  produto() {
    return this.hasMany('App/Models/Compras/Produto');
  }

  static get table() {
    return 'comp_unidademedida';
  }

  static get primaryKey() {
    return 'idunidade';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = UnidadeMedida;
