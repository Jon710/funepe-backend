/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Empresa = use('App/Models/Compras/Empresa');

class EmpresaController {
  async index({ response }) {
    const empresas = await Empresa.all();

    return response.json({
      empresas,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const empresa = await Empresa.create(data);

    return response.json({
      empresa,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const empresa = await Empresa.findOrFail(id);

    return response.json({
      empresa,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const empresa = await Empresa.findOrFail(id);
    const data = request.all();

    empresa.merge(data);
    await empresa.save();

    return response.json({
      empresa,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const empresa = await Empresa.findOrFail(id);

    await empresa.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = EmpresaController;
