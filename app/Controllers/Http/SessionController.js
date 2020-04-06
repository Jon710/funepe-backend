const Usuario = use('App/Models/Usuario');

class SessionController {
  async store({ request, auth, response }) {
    const { username, senha } = request.only(['username', 'senha']);

    try {
      const user = await Usuario.findByOrFail({ username });
      // console.log(user.username);
      if (!(await user.isSame(senha))) {
        // console.log('Senha incorreta');
        return response.status(401).json({ error: 'Senha incorreta.' });
      }
      const { token } = await auth.attempt(username, senha);

      return response.json({
        user,
        token,
      });
    } catch (error) {
      return response.status(404).json({ error: 'Missing Database ROW' });
    }
  }
}

module.exports = SessionController;
