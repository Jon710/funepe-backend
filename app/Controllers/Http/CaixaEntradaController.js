/* eslint-disable camelcase */

const CaixaEntrada = use('App/Models/CaixaEntrada');

class CaixaEntradaController {
  async index({ params }) {
    const { usuarios_id } = params;
    // console.log(usuarios_id);
    const caixaentradas = await CaixaEntrada.query()
      .where('iddestinatario', usuarios_id)
      .with('documento')
      .with('usuario')
      .fetch();

    return caixaentradas;
  }

  /**
   * Create/save a new caixaentrada.
   * POST caixaentradas
   */
  async store({ request, params }) {
    const { usuarios_id } = params;
    const data = request.all();
    const caixaentrada = await CaixaEntrada.create({
      ...data,
      iddestinatario: usuarios_id,
    });

    return caixaentrada;
  }

  /**
   * Display a single caixaentrada.
   * GET caixaentradas/:id
   */
  async show({ params }) {
    const { id } = params;
    const caixaentrada = await CaixaEntrada.findOrFail(id);

    return caixaentrada;
  }

  /**
   * Update caixaentrada details.
   * PUT or PATCH caixaentradas/:id
   */
  async update({ params, request }) {
    const { id } = params;
    // console.log(id);
    const caixaentrada = await CaixaEntrada.findOrFail(id);
    // console.log(caixaentrada);
    const data = request.all();

    caixaentrada.merge(data);
    await caixaentrada.save();

    return caixaentrada;
  }

  async destroy({ params }) {
    const { id } = params;
    const caixaentrada = await CaixaEntrada.findOrFail(id);

    await caixaentrada.delete();
  }
}

module.exports = CaixaEntradaController;
