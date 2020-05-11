/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Categoria extends Model {
  categoria() {
    return this.hasMany('App/Models/Compras/Categoria');
  }

  static get table() {
    return 'comp_categoria';
  }

  static get primaryKey() {
    return 'idcategoria';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Categoria;
