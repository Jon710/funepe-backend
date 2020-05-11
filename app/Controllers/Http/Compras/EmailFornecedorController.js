/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const EmailFornecedor = use('App/Models/Compras/EmailFornecedor');

class EmailFornecedorController {
  async index({ response }) {
    const emailsfornecedor = await EmailFornecedor.all();

    return response.json({
      emailsfornecedor,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const emailfornecedor = await EmailFornecedor.create(data);

    return response.json({
      emailfornecedor,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const emailfornecedor = await EmailFornecedor.findOrFail(id);

    return response.json({
      emailfornecedor,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const emailfornecedor = await EmailFornecedor.findOrFail(id);
    const data = request.all();

    emailfornecedor.merge(data);
    await emailfornecedor.save();

    return response.json({
      emailfornecedor,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const emailfornecedor = await EmailFornecedor.findOrFail(id);

    await emailfornecedor.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = EmailFornecedorController;
