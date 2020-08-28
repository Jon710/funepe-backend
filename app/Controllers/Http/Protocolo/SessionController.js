const Usuario = use('App/Models/Protocolo/Usuario');
// const validarCPF = use('validar-cpf');

class SessionController {
  async store({ request, auth, response }) {
    const { username, senha } = request.only(['username', 'senha']);

    try {
      //   if (!validarCPF(cpfusuario)) {
      //     return response
      //       .status(400)
      //       .json({ error: 'CPF do Usuário é inválido.' });
      //   }

      const user = await Usuario.findByOrFail({ username });

      if (!(await user.isSame(senha))) {
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
