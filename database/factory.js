/*
| Factory
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/Protocolo/Usuario', (faker, i, data = {}) => {
  return {
    username: faker.name(),
    senha: faker.string(),
    ...data,
  };
});
