/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Marca extends Model {
  produto() {
    return this.hasMany('App/Models/Compras/Produto');
  }

  static get table() {
    return 'comp_marca';
  }

  static get primaryKey() {
    return 'idmarca';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Marca;
