/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  static get connection() {
    return 'pgauth';
  }

  up() {
    this.alter('arq_usuario', (table) => {
      table.integer('role_id').unsigned().references('id').inTable('roles');
    });
  }

  down() {
    this.alter('arq_usuario', (table) => {
      table.dropColumn('role_id');
    });
  }
}

module.exports = UserSchema;
