/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Departamento = use('App/Models/Compras/Departamento');

class DepartamentoController {
  async index({ response }) {
    const departamentos = await Departamento.all();

    return response.json({
      departamentos,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const departamento = await Departamento.create(data);

    return response.json({
      departamento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const departamento = await Departamento.findOrFail(id);

    return response.json({
      departamento,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const departamento = await Departamento.findOrFail(id);
    const data = request.all();

    departamento.merge(data);
    await departamento.save();

    return response.json({
      departamento,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const departamento = await Departamento.findOrFail(id);

    await departamento.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = DepartamentoController;
