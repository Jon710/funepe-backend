const Validator = use('Validator');
const Database = use('Database');
const { rule } = use('Validator');
const Antl = use('Antl');

class Usuario {
  get rules() {
    return {
      username: [rule('required')],
      senha: [rule('required')],
      email: [rule('required')],
      idusuario: [
        rule('required'),
        rule('exists', ['arq_usuario', 'idusuario']),
      ],
    };
  }

  get message() {
    return Antl.list('validation');
  }

  get validateAll() {
    return true;
  }
}

const existsFn = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return;
  }

  const [table, column] = args;
  const row = await Database.table(table).where(column, value).first();

  if (!row) {
    throw message;
  }
};

Validator.extend('exists', existsFn);

module.exports = Usuario;
