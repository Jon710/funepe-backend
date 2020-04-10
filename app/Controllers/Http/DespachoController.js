/* eslint-disable camelcase */

const Despacho = use('App/Models/Despacho');

class DespachoController {
  async index({ params }) {
    const { documents_id } = params;
    // console.log(documents_id);
    const despachos = await Despacho.query()
      .where('iddocumento', documents_id)
      .with('documento')
      .with('usuario')
      .fetch();

    return despachos;
  }

  /**
   * Create/save a new despacho.
   */
  async store({ request, params }) {
    const { documents_id } = params;
    const data = request.all();
    const despacho = await Despacho.create({
      ...data,
      iddocumento: documents_id,
    });

    return despacho;
  }

  /**
   * Display a single despacho.
   * GET despachos/:id
   */
  async show({ params }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);

    return despacho;
  }

  /**
   * Update despacho details.
   * PUT or PATCH despachos/:id
   */
  async update({ params, request }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);
    const data = request.all();

    despacho.merge(data);
    await despacho.save();

    return despacho;
  }

  /*
   * Delete a despacho with id.
   * DELETE despachos/:id
   */
  async destroy({ params }) {
    const { id } = params;
    const despacho = await Despacho.findOrFail(id);

    await despacho.delete();
  }
}

module.exports = DespachoController;
