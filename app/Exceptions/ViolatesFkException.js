const { LogicalException } = require('@adonisjs/generic-exceptions');

class ViolatesFkException extends LogicalException {
  handle(error, { response }) {
    return response.status(500).json({
      error:
        'Não é possível deletar este registro, pois existem outras informações no sistema que dependem do mesmo.',
    });
  }
}

module.exports = ViolatesFkException;
