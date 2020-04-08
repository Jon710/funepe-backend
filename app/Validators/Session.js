class Session {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required',
      senha: 'required',
      // token: 'required',
    };
  }
}

module.exports = Session;
