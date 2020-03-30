const Model = use('Model');

class ArquivoAnexo extends Model {
  documento() {
    return this.belongsTo('App/Models/Documento', 'iddocumento', 'iddocumento');
  }

  static get table() {
    return 'proto_arquivoanexo';
  }

  static get primaryKey() {
    return 'idarquivoanexo';
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

module.exports = ArquivoAnexo;
