/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const TelefoneEmpresa = use('App/Models/Compras/TelefoneEmpresa');

class TelefoneEmpresaController {
  async index({ response }) {
    const telefonesempresa = await TelefoneEmpresa.all();

    return response.json({
      telefonesempresa,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const telefoneempresa = await TelefoneEmpresa.create(data);

    return response.json({
      telefoneempresa,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const telefoneempresa = await TelefoneEmpresa.findOrFail(id);

    return response.json({
      telefoneempresa,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const telefoneempresa = await TelefoneEmpresa.findOrFail(id);
    const data = request.all();

    telefoneempresa.merge(data);
    await telefoneempresa.save();

    return response.json({
      telefoneempresa,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const telefoneempresa = await TelefoneEmpresa.findOrFail(id);

    await telefoneempresa.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = TelefoneEmpresaController;
