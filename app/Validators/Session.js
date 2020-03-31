class Session {
  get rules() {
    return {
      username: 'users|required',
      senha: 'required',
      token: 'required',
    };
  }
}

module.exports = Session;
