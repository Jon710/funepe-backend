const Model = use('Model');
const Hash = use('Hash');

class Usuario extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        userInstance.senha = await Hash.make(userInstance.senha);
      }
    });
  }

  isSame(password) {
    return Hash.verify(password, this.senha);
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  gruposUsuario() {
    return this.hasMany('App/Models/UsuarioGrupo');
  }

  funcao() {
    return this.belongsTo('App/Models/Funcao');
  }

  caixasEntrada() {
    return this.hasMany('App/Models/CaixaEntrada');
  }

  documentos() {
    return this.hasMany('App/Models/Documento');
  }

  despachos() {
    return this.hasMany('App/Models/Despacho');
  }

  static get table() {
    return 'arq_usuario';
  }

  static get primaryKey() {
    return 'idusuario';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Usuario;
