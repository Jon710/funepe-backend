const Env = use('Env');
// const Mail = use('Mail');

const sgMail = require('@sendgrid/mail');

const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Fornecedor = use('App/Models/Compras/Fornecedor');
const Token = use('App/Models/Protocolo/Token');

class SendMailController {
  async store({ request, response }) {
    const fornecedor = request.all();

    const sgKey = `${Env.get('SENDGRID_API_KEY')}`;

    sgMail.setApiKey(sgKey);

    const fornecedorData = await Fornecedor.findByOrFail(
      'idfornecedor',
      fornecedor.idfornecedor
    );

    if (fornecedorData.emailprincipal === null) {
      return response
        .status(400)
        .json({ error: 'Email do Fornecedor não cadastrado no sistema!' });
    }

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

    const emailContent = `<h2> Olá ${fornecedorData.nomefantasia},</h2>
    <p>
      Favor preencher os preços de cada produto pedido.
    </p>
    <p>
    <a href="${emailToFornecedorUrl}" target="_blank">Colocar preços</a>
    </p>
    <p>
      <strong>FUNEPE</strong>
    </p>`;

    const msg = {
      to: `${fornecedorData.emailprincipal}`,
      from: 'jonmoraesnl@gmail.com',
      subject: 'FUNEPE - Orçamento de Preços',
      html: emailContent,
    };

    sgMail.send(msg, true).then(
      () => {
        return response.response.statusCode;
      },
      (error) => {
        console.error(error);
      }
    );

    // await Mail.send(
    //   'emails.orcamentofornecedor',
    //   { fornecedor: fornecedorData.nomefantasia, emailToFornecedorUrl },
    //   (message) => {
    //     message
    //       .to(fornecedorData.emailprincipal)
    //       .from('leonard.predovic3@ethereal.email')
    //       .subject('Orçamento de Preços - FUNEPE');
    //   }
    // );
  }
}

module.exports = SendMailController;
