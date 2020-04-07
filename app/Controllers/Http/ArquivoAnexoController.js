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

    const arquivoanexo = request.file('image');
    await arquivoanexo.moveAll(Helpers.tmpPath('uploads'), (file) => ({
      name: `${Date.now()}-${file.clientName}`,
    }));

    if (!arquivoanexo.movedAll()) {
      return arquivoanexo.errors();
    }

    await Promise.all(
      arquivoanexo.movedList().map((image) =>
        document.arquivosAnexo().create({
          patharquivo: image.fileName,
          tipo: 1,
          observacao: 'obs',
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
