const Env = use('Env');
const Mail = use('Mail');

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
      to: 'jonmoraesnl@gmail.com',
      from: 'jonmoraesnl@gmail.com', // Use the email address or domain you verified above
      subject: 'FUNEPE - Orçamento de Preços',
      html: emailContent,
    };

    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );

    // await Mail.send(
    //   'emails.orcamentofornecedor',
    //   { fornecedor: fornecedorData.nomefantasia, emailToFornecedorUrl },
    //   (message) => {
    //     message
    //       .to(fornecedorData.emailprincipal) // email do fornecedor
    //       .from('leonard.predovic3@ethereal.email') // funepe email (sempre o msm)
    //       .subject('Orçamento de Preços - FUNEPE');
    //   }
    // );
  }
}

module.exports = SendMailController;
