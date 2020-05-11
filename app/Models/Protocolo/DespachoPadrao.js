const Model = use('Model');

class DespachoPadrao extends Model {
  despachos() {
    return this.hasMany('App/Models/Protocolo/Despacho');
  }

  static get table() {
    return 'proto_despachopadrao';
  }

  static get primaryKey() {
    return 'idpadrao';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = DespachoPadrao;
