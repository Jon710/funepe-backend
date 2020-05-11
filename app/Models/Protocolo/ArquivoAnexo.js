const Model = use('Model');
const Env = use('Env');

class ArquivoAnexo extends Model {
  documento() {
    return this.belongsTo(
      'App/Models/Protocolo/Documento',
      'iddocumento',
      'iddocumento'
    );
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

  static get computed() {
    return ['url'];
  }

  getUrl({ path }) {
    return `${Env.get('APP_URL')}/anexo/${path}`;
  }
}

module.exports = ArquivoAnexo;
