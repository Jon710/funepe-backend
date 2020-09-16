/* eslint-disable camelcase */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Requisicao = use('App/Models/Compras/Requisicao');
const ViolatesFkException = use('App/Exceptions/ViolatesFkException');

class RequisicaoController {
  // /usuario/:usuario_id/requisicao
  async index({ response, params }) {
    const { usuario_id } = params;

    const requisicoes = await Requisicao.query()
      .where('iddestinatario', usuario_id)
      .with('departamento')
      .with('solicitante')
      .with('destinatario')
      .fetch();

    return response.json({
      requisicoes,
    });
  }

  // /solicitante/:solicitante_id/requisicao
  async getMyReq({ response, params }) {
    const { solicitante_id } = params;

    const myOwnReq = await Requisicao.query()
      .where('idsolicitante', solicitante_id)
      .with('departamento')
      .with('solicitante')
      .with('destinatario')
      .fetch();

    return response.json({
      myOwnReq,
    });
  }

  // /requisicao?datareq
  async getReqByDate({ request, response }) {
    const { datareq } = request.get();

    const reqs = await Requisicao.query()
      .where('datareq', datareq)
      .with('departamento')
      .with('solicitante')
      .with('destinatario')
      .fetch();

    const listaRequisicoes = reqs.rows;

    return response.json({
      listaRequisicoes,
    });
  }

  async getReqById({ params, response }) {
    const { idreq } = params;

    const requisicoes = await Requisicao.query()
      .where('idrequisicao', idreq)
      .with('departamento')
      .with('solicitante')
      .with('destinatario')
      .fetch();

    return response.json({
      requisicoes,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const requisicao = await Requisicao.create(data);

    return response.json({
      requisicao,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const requisicao = await Requisicao.findOrFail(id);

    return response.json({
      requisicao,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const requisicao = await Requisicao.findOrFail(id);
    const data = request.all();

    requisicao.merge(data);
    await requisicao.save();

    return response.json({
      requisicao,
    });
  }

  async destroy({ params, response }) {
    try {
      const { id } = params;
      const requisicao = await Requisicao.findOrFail(id);

      await requisicao.delete();
      return response.json({
        message: 'Excluído com Sucesso!',
      });
    } catch (err) {
      throw new ViolatesFkException();
    }
  }
}

module.exports = RequisicaoController;
