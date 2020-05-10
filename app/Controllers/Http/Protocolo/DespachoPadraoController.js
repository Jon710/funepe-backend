/* eslint-disable camelcase */

const DespachoPadrao = use('App/Models/DespachoPadrao');

class DespachoPadraoController {
  async index({ response }) {
    const despachospadrao = await DespachoPadrao.all();

    return response.json({
      despachospadrao,
    });
  }

  async store({ request, response }) {
    const data = request.all();
    const despachopadrao = await DespachoPadrao.create(data);

    return response.json({
      despachopadrao,
    });
  }

  async show({ params, response }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);

    return response.json({
      despachopadrao,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);
    const data = request.all();

    despachopadrao.merge(data);
    await despachopadrao.save();

    return response.json({
      despachopadrao,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);

    await despachopadrao.delete();
    return response.json({
      message: 'Excluído com sucesso.',
    });
  }
}

module.exports = DespachoPadraoController;
