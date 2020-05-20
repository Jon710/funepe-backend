/* eslint-disable camelcase */
const Drive = use('Drive');
const ArquivoAnexo = use('App/Models/Protocolo/ArquivoAnexo');
const Documento = use('App/Models/Protocolo/Documento');

class ArquivoAnexoController {
  async index({ params, response }) {
    const { documents_id } = params;

    const arquivosanexo = await ArquivoAnexo.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .fetch();

    return response.json({
      arquivosanexo,
    });
  }

  async store({ request, params, response }) {
    request.multipart.file('arquivos', {}, async (file) => {
      try {
        const document = await Documento.findOrFail(params.documents_id);

        const ACL = 'public-read';
        const ContentType = file.headers['content-type'];
        const Key = `${(Math.random() * 100).toString(32)}-${file.clientName}`;

        const url = await Drive.disk('s3').put(Key, file.stream, {
          ContentType,
          ACL,
        });

        await ArquivoAnexo.create({
          patharquivo: url,
          tipo: file.extname,
          observacao: file.headers,
          iddocumento: document.iddocumento,
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
    const { id: patharquivo } = params;

    try {
      const file = await ArquivoAnexo.findByOrFail('patharquivo', patharquivo);

      response.implicitEnd = false;
      response.header('Content-Type', file.ContentType);

      const stream = await Drive.getStream(file.key);
      await stream.pipe(response.response);
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

  async destroy({ params }) {
    const { id } = params;
    const arquivoanexo = await ArquivoAnexo.findOrFail(id);

    await arquivoanexo.delete();
  }
}

module.exports = ArquivoAnexoController;
