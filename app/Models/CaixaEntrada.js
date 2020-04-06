const Model = use('Model');

class CaixaEntrada extends Model {
  usuario() {
    return this.belongsTo('App/Models/Usuario', 'iddestinatario', 'idusuario');
  }

  documento() {
    return this.belongsTo('App/Models/Documento', 'iddocumento', 'iddocumento');
  }

  static get table() {
    return 'proto_caixaentrada';
  }

  static get primaryKey() {
    return 'idcaixaentrada';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

}

module.exports = CaixaEntrada;
