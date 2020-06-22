/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ViolatesFkException = use('App/Exceptions/ViolatesFkException');
const Empresa = use('App/Models/Compras/Empresa');

class EmpresaController {
  async index({ response }) {
    const empresas = await Empresa.query().with('tipoempresa').fetch();

    return response.json({
      empresas,
    });
  }

  async store({ request, response }) {
    try {
      const data = request.except('idempresa');

      const empresa = await Empresa.create(data);

      return response.json({
        empresa,
      });
    } catch (error) {
      console.log(error);
      throw new ViolatesFkException();
    }
  }

  async show({ params, response }) {
    const { id } = params;

    const empresa = await Empresa.query()
      .where('idempresa', id)
      .with('tipoempresa')
      .fetch();

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
