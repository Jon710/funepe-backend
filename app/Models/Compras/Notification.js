/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Notification extends Model {
  notification() {
    return this.belongsTo('App/Models/Compras/Notification');
  }

  static get table() {
    return 'arq_notificacao';
  }

  static get primaryKey() {
    return 'id';
  }

  static get connection() {
    return 'pgauth';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Notification;
