/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TipoDocumento extends Model {
  documentos() {
    return this.hasMany('App/Models/Documento');
  }

  static get table() {
    return 'proto_tipodocumento';
  }

  static get primaryKey() {
    return 'idtipo';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

}

module.exports = TipoDocumento;
