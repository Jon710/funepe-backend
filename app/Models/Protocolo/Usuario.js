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
    return this.hasMany('App/Models/Protocolo/Token');
  }

  gruposUsuario() {
    return this.hasMany('App/Models/Protocolo/UsuarioGrupo');
  }

  funcao() {
    return this.belongsTo('App/Models/Protocolo/Funcao');
  }

  caixasEntrada() {
    return this.hasMany('App/Models/Protocolo/CaixaEntrada');
  }

  documentos() {
    return this.hasMany('App/Models/Protocolo/Documento');
  }

  despachos() {
    return this.hasMany('App/Models/Protocolo/Despacho');
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
