/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Documento extends Model {
  usuario() {
    return this.belongsTo(
      'App/Models/Protocolo/Usuario',
      'idexpedidor',
      'idusuario'
    );
  }

  caixasEntrada() {
    return this.hasMany('App/Models/Protocolo/CaixaEntrada');
  }

  arquivosAnexo() {
    return this.hasMany(
      'App/Models/Protocolo/ArquivoAnexo',
      'iddocumento',
      'iddocumento'
    );
  }

  tipoDocumento() {
    return this.belongsTo(
      'App/Models/Protocolo/TipoDocumento',
      'idtipodocumento',
      'idtipo'
    );
  }

  prioridade() {
    return this.belongsTo(
      'App/Models/Protocolo/Prioridade',
      'idprioridade',
      'idprioridade'
    );
  }

  despachos() {
    return this.hasMany('App/Models/Protocolo/Despacho');
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
}

module.exports = Documento;
