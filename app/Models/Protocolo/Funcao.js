/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Funcao extends Model {
  usuarios() {
    return this.hasMany('App/Models/Protocolo/Usuario');
  }

  static get table() {
    return 'arq_funcao';
  }

  static get primaryKey() {
    return 'idfuncao';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Funcao;
