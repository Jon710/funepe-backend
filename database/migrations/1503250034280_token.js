/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TokensSchema extends Schema {
  up() {
    this.create('comp_tokens', (table) => {
      table.increments();
      table
        .integer('idfornecedor')
        .unsigned()
        .references('idfornecedor')
        .inTable('comp_fornecedor');
      table.string('token', 255).notNullable().unique().index();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('comp_tokens');
  }
}

module.exports = TokensSchema;
