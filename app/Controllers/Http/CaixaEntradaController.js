/* eslint-disable camelcase */

const CaixaEntrada = use('App/Models/CaixaEntrada');

class CaixaEntradaController {
  async index({ params, response }) {
    const { usuarios_id } = params;

    const caixaentradas = await CaixaEntrada.query()
      .where('iddestinatario', usuarios_id)
      .with('documento')
      .with('documento.tipoDocumento')
      .with('documento.usuario')
      .with('usuario')
      .fetch();

    return response.json({
      caixaentradas,
    });
  }

  async store({ request, params, response }) {
    const { usuarios_id } = params;
    const data = request.all();
    const caixaentrada = await CaixaEntrada.create({
      ...data,
      iddestinatario: usuarios_id,
    });

    return response.json({
      caixaentrada,
    });
  }

  async show({ params }) {
    const { id } = params;
    const caixaentrada = await CaixaEntrada.findOrFail(id);

    return caixaentrada;
  }

  async update({ params, request }) {
    const { id } = params;

    const caixaentrada = await CaixaEntrada.findOrFail(id);

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
