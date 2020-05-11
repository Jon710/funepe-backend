const Model = use('Model');

class Despacho extends Model {
  documento() {
    return this.belongsTo(
      'App/Models/Protocolo/Documento',
      'iddocumento',
      'iddocumento'
    );
  }

  usuario() {
    return this.belongsTo(
      'App/Models/Protocolo/Usuario',
      'idusuario',
      'idusuario'
    );
  }

  static get table() {
    return 'proto_despacho';
  }

  static get primaryKey() {
    return 'iddespacho';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Despacho;
