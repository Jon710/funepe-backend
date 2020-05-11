/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Empresa extends Model {
  tipoempresa() {
    return this.belongsTo(
      'App/Models/Compras/TipoEmpresa',
      'idtipoempresa',
      'idtipoempresa'
    );
  }

  telefoneempresa() {
    return this.hasMany(
      'App/Models/Compras/TelefoneEmpresa',
      'idempresa',
      'idempresa'
    );
  }

  emailempresa() {
    return this.hasMany(
      'App/Models/Compras/EmailEmpresa',
      'idempresa',
      'idempresa'
    );
  }

  static get table() {
    return 'comp_empresa';
  }

  static get primaryKey() {
    return 'idempresa';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Empresa;
