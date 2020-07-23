/* eslint-disable camelcase */
const Drive = use('Drive');
const ArquivoAnexo = use('App/Models/Compras/ArquivoAnexo');
const Requisicao = use('App/Models/Compras/Requisicao');

class ArquivoAnexoController {
  async index({ params, response }) {
    const { requisicao_id } = params;

    const arquivosanexo = await ArquivoAnexo.query()
      .where('idrequisicao', requisicao_id)
      .with('requisicao')
      .fetch();

    return response.json({
      arquivosanexo,
    });
  }

  async store({ request, params, response }) {
    request.multipart.file('arquivos', {}, async (file) => {
      try {
        const requisicao = await Requisicao.findOrFail(params.requisicao_id);

        const ACL = 'public-read';
        const ContentType = file.headers['content-type'];
        const Key = `requisicao/${(Math.random() * 100).toString(32)}-${
          file.clientName
        }`;

        const url = await Drive.disk('s3').put(Key, file.stream, {
          ContentType,
          ACL,
        });

        await ArquivoAnexo.create({
          patharquivo: url,
          tipo: file.extname,
          observacao: file.headers,
          idrequisicao: requisicao.idrequisicao,
          nomearquivo: Key,
        });
      } catch (err) {
        return response.status(err.status).json({
          message: 'Não foi possivel enviar o arquivo.',
          err_message: err.message,
        });
      }
    });
    await request.multipart.process();
  }

  async show({ params, response }) {
    try {
      const { requisicao_id, id } = params;

      const arquivoanexo = await ArquivoAnexo.query()
        .where('idrequisicao', requisicao_id)
        .where('idarquivoanexo', id)
        .with('requisicao')
        .fetch();

      return response.json({
        arquivoanexo,
      });
    } catch (err) {
      return response.status(err.status).json({
        message: 'Arquivo não existe!',
        err_message: err.message,
      });
    }
  }

  async update({ params, request, response }) {
    const { id } = params;
    const arquivoanexo = await ArquivoAnexo.findOrFail(id);
    const data = request.all();

    arquivoanexo.merge(data);
    await arquivoanexo.save();

    return response.json({
      arquivoanexo,
    });
  }

  async destroy({ params, response }) {
    try {
      const { requisicao_id, id } = params;

      const arquivoanexo = await ArquivoAnexo.query()
        .where('idrequisicao', requisicao_id)
        .where('idarquivoanexo', id)
        .fetch();

      const arquivo = arquivoanexo;

      const anexo = await arquivo.toJSON();

      await Drive.delete(anexo[0].nomearquivo);

      await ArquivoAnexo.query().where('idarquivoanexo', id).delete();
    } catch (err) {
      return response.status(err.status).json({
        message: 'Não foi possivel deletar o arquivo.',
        err_message: err.message,
      });
    }
  }
}

module.exports = ArquivoAnexoController;
