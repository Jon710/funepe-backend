/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TipoTelefone extends Model {
  telefoneempresa() {
    return this.hasMany('App/Models/Compras/TelefoneEmpresa');
  }

  telefonefavorecido() {
    return this.hasMany('App/Models/Compras/TelefoneFavorecido');
  }

  static get table() {
    return 'comp_tipotelefone';
  }

  static get primaryKey() {
    return 'idtipotelefone';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = TipoTelefone;
