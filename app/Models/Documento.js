/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Documento extends Model {
  usuario() {
    return this.belongsTo('App/Models/Usuario', 'idexpedidor', 'idusuario');
  }

  caixasEntrada() {
    return this.hasMany('App/Models/CaixaEntrada');
  }

  arquivosAnexo() {
    return this.hasMany('App/Models/ArquivoAnexo');
  }

  tipoDocumento() {
    return this.belongsTo(
      'App/Models/TipoDocumento',
      'idtipodocumento',
      'idtipo'
    );
  }

  prioridade() {
    return this.belongsTo(
      'App/Models/Prioridade',
      'idprioridade',
      'idprioridade'
    );
  }

  despachos() {
    return this.hasMany('App/Models/Despacho');
  }

  static get table() {
    return 'proto_documento';
  }

  static get primaryKey() {
    return 'iddocumento';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  static get incrementing() {
    return false;
  }
}

module.exports = Documento;
