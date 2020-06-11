/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Requisicao extends Model {
  itemrequisicao() {
    return this.hasMany('App/Models/Compras/ItemRequisicao');
  }

  departamento() {
    return this.belongsTo(
      'App/Models/Compras/Departamento',
      'iddepartamento',
      'iddepartamento'
    );
  }

  historicorequisicao() {
    return this.hasMany('App/Models/Compras/HistoricoRequisicao');
  }

  orcamento() {
    return this.belongsTo(
      'App/Models/Compras/Orcamento',
      'idrequisicao',
      'idrequisicao'
    );
  }

  usuario() {
    return this.belongsTo(
      'App/Models/Protocolo/Usuario',
      'idsolicitante',
      'idusuario'
    );
  }

  static get table() {
    return 'comp_requisicao';
  }

  static get primaryKey() {
    return 'idrequisicao';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Requisicao;
