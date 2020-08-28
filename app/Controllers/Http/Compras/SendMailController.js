const Env = use('Env');
const Mail = use('Mail');

const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Fornecedor = use('App/Models/Compras/Fornecedor');
const Token = use('App/Models/Protocolo/Token');

class SendMailController {
  async store({ request, response }) {
    const fornecedor = request.all();

    const fornecedorData = await Fornecedor.findByOrFail(
      'idfornecedor',
      fornecedor.idfornecedor
    );

    // validar se o fornecedor tem email cadastrado no sistema
    // if (!fornecedor) {
    //   return response
    //     .status(400)
    //     .json({ error: 'Email do Fornecedor não cadastrado no sistema!' });
    // }

    const random = await promisify(randomBytes)(16);
    const token = random.toString('hex');

    await Token.create({
      idfornecedor: 216,
      token,
      type: 'orcamentofornecedor',
    });

    const emailToFornecedorUrl = `${Env.get(
      'FRONT_URL'
    )}/mailtoforn?token=${token}`;

    await Mail.send(
      'emails.orcamentofornecedor',
      { fornecedor: fornecedorData.nomefantasia, emailToFornecedorUrl },
      (message) => {
        message
          .to(fornecedorData.emailprincipal) // email do fornecedor
          .from('leonard.predovic3@ethereal.email') // funepe email (sempre o msm)
          .subject('Orçamento de Preços - FUNEPE');
      }
    );
  }
}

module.exports = SendMailController;
