/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class HistoricoRequisicao extends Model {
  requisicao() {
    return this.belongsTo(
      'App/Models/Compras/Requisicao',
      'idrequisicao',
      'idrequisicao'
    );
  }

  static get table() {
    return 'comp_historicorequisicao';
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

module.exports = HistoricoRequisicao;
