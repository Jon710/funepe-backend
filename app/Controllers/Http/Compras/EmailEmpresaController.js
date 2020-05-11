/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const EmailEmpresa = use('App/Models/Compras/EmailEmpresa');

class EmailEmpresaController {
  async index({ response }) {
    const emailsempresa = await EmailEmpresa.all();

    return response.json({
      emailsempresa,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const emailempresa = await EmailEmpresa.create(data);

    return response.json({
      emailempresa,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const emailempresa = await EmailEmpresa.findOrFail(id);

    return response.json({
      emailempresa,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const emailempresa = await EmailEmpresa.findOrFail(id);
    const data = request.all();

    emailempresa.merge(data);
    await emailempresa.save();

    return response.json({
      emailempresa,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const emailempresa = await EmailEmpresa.findOrFail(id);

    await emailempresa.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = EmailEmpresaController;
