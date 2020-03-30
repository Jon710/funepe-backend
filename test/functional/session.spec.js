const { test, trait } = use('Test/Suite')('Session');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Usuario = use('App/Models/Usuario')
trait('Test/ApiClient');
trait('DatabaseTransactions')

test('it should return JWT token when session is created', async ({ assert, client }) => {
  const sessionPayload = {
  idFuncao: 1,
	idusuario: 11,
	senha: "selva",
	username: "jao",
	md5: "j",
	fullname: "joao",
	admin: true,
	email: "joao@gmail.com.br",
	celular: "1234567",
	tipouser: 1,
	status: 0,
	sistema: "j",
	fotousuario: "l",
	cpfusuario: "123"
  }

  await Factory
    .model('App/Models/Usuario')
    .create(sessionPayload);

  const response = await client
  .post('/sessions')
  .send(sessionPayload)
  .end()

  response.assertStatus(200);
  assert.exists(response.body.token);
})
