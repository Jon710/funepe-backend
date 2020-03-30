/* eslint-disable camelcase */

const DespachoPadrao = use('App/Models/DespachoPadrao');

class DespachoPadraoController {
  async index() {
    const despachospadrao = await DespachoPadrao.all();

    return despachospadrao;
  }

  /**
   * Create/save a new despachopadrao.
   */
  async store({ request }) {
    const data = request.all();
    const despachopadrao = await DespachoPadrao.create(data);

    return despachopadrao;
  }

  /**
   * Display a single despachopadrao.
   */
  async show({ params }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);

    return despachopadrao;
  }

  async update({ params, request }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);
    const data = request.all();

    despachopadrao.merge(data);
    await despachopadrao.save();

    return despachopadrao;
  }

  async destroy({ params }) {
    const { id } = params;
    const despachopadrao = await DespachoPadrao.findOrFail(id);

    await despachopadrao.delete();
  }
}

module.exports = DespachoPadraoController;
