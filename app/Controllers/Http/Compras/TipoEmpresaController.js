/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const TipoEmpresa = use('App/Models/Compras/TipoEmpresa');

class TipoEmpresaController {
  async index({ response }) {
    const tiposempresa = await TipoEmpresa.all();

    return response.json({
      tiposempresa,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const tipoempresa = await TipoEmpresa.create(data);

    return response.json({
      tipoempresa,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const tipoempresa = await TipoEmpresa.findOrFail(id);

    return response.json({
      tipoempresa,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const tipoempresa = await TipoEmpresa.findOrFail(id);
    const data = request.all();

    tipoempresa.merge(data);
    await tipoempresa.save();

    return response.json({
      tipoempresa,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const tipoempresa = await TipoEmpresa.findOrFail(id);

    await tipoempresa.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = TipoEmpresaController;
