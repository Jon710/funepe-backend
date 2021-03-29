/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Notification = use('App/Models/Compras/Notification');

class NotificationController {
  async index({ response }) {
    try {
      const notifications = await Notification.all();

      return response.json({
        notifications,
      });
    } catch (error) {
      return error;
    }
  }

  async store({ request, response }) {
    const data = request.only('categoria');

    const notification = await Notification.create(data);

    return response.json({
      notification,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const notification = await Notification.findOrFail(id);

    return response.json({
      notification,
    });
  }

  async update({ params, response }) {
    const { id } = params;
    const notification = await Notification.findOrFail(id);

    notification.merge({ read: true });
    await notification.save();

    return response.json({
      notification,
    });
  }
}

module.exports = NotificationController;
