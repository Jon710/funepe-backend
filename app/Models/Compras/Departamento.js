/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Departamento extends Model {
  requisicao() {
    return this.hasMany('App/Models/Compras/Requisicao');
  }

  static get table() {
    return 'comp_departamento';
  }

  static get primaryKey() {
    return 'iddepartamento';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Departamento;
