const TipoDocumento = use('App/Models/TipoDocumento');

class TipoDocumentoController {
  /**
   * Show a list of all tipodocumentos.
   * GET tipodocumentos
   */
  async index({ response }) {
    const types = await TipoDocumento.all();
    return response.json({
      types,
    });
  }

  /**
   * Create/save a new tipodocumento.
   * POST tipodocumentos
   */
  async store({ request, response }) {
    const data = request.all();

    const type = await TipoDocumento.create(data);

    return response.json({
      type,
    });
  }

  /**
   * Display a single tipodocumento.
   * GET tipodocumentos/:id
   */
  async show({ params, response }) {
    const { id } = params;

    const type = await TipoDocumento.findOrFail(id);

    return response.json({
      type,
    });
  }

  /**
   * Update tipodocumento details.
   * PUT or PATCH tipodocumentos/:id
   */
  async update({ params, request, response }) {
    const { id } = params;
    const type = await TipoDocumento.findOrFail(id);
    const data = request.all();

    type.merge(data);
    await type.save();

    return response.json({
      type,
    });
  }

  /**
   * Delete a tipodocumento with id.
   * DELETE tipodocumentos/:id
   */
  async destroy({ params }) {
    const { id } = params;
    const type = await TipoDocumento.findOrFail(id);

    await type.delete();
  }
}

module.exports = TipoDocumentoController;
