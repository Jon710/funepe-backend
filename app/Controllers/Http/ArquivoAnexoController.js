/* eslint-disable camelcase */
const ArquivoAnexo = use('App/Models/ArquivoAnexo');
const Documento = use('App/Models/Documento');
const Helpers = use('Helpers');

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
    const document = await Documento.findOrFail(params.documents_id);
    console.log('DOC: ', request.all());
    // console.log('DOC: ', request.file('arquivos'));

    const arquivoanexo = request.file('arquivos');
    // const myfiles = arquivoanexo;
    console.log('ARQUIVOS');
    
    await arquivoanexo.moveAll(Helpers.tmpPath('uploads'), (file) => ({
      name: `${Date.now()}-${file.clientName}`,
    }));

    console.log('ARQUIVO2');

    if (!arquivoanexo.movedAll()) {
      return arquivoanexo.errors();
    }

    await Promise.all(
      arquivoanexo.movedList().map((file) =>
        document.arquivosAnexo().create({
          patharquivo: file.fileName,
          tipo: file.extname,
          observacao: file.headers,
        })
      )
    );

    return response.json({
      arquivoanexo,
    });
  }

  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
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
