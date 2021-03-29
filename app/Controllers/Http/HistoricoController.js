/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Historico = use('App/Models/Historico');

class HistoricoController {
  async store({ request, response }) {
    const data = await request.all();
    const ipAddress = request.header('x-forwarded-for') || request.ip();
    const newHistorico = Object.assign(data, {
      enderecoIP: ipAddress,
      dataHora: new Date(),
    });
    const historico = await Historico.create(newHistorico);
    try {
      return response.json({
        historico,
      });
    } catch (error) {
      return response.json({ error: 'Erro ao cadastrar Historico' });
    }
  }

  async show({ params, response }) {
    const { id } = params;
    const historicos = await Historico.query()
      .where('codUsuario', id)
      .where('origem', 'FUNEPE')
      .orderBy('dataHora', 'desc')
      .fetch();

    if (!historicos) {
      return response.status(400).json({ error: 'Este Historico não existe!' });
    }
    return response.json({ historicos });
  }
}

module.exports = HistoricoController;
