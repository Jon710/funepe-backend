const Model = use('Model');
const Env = use('Env');

class ArquivoAnexo extends Model {
  requisicao() {
    return this.belongsTo(
      'App/Models/Compras/Requisicao',
      'idrequisicao',
      'idrequisicao'
    );
  }

  static get table() {
    return 'comp_arquivoanexo';
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
