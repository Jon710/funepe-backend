/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Historico extends Model {
  static get connection() {
    return 'pgauth';
  }

  static get table() {
    return 'arq_historico';
  }

  static get primaryKey() {
    return 'idhistorico';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Historico;
