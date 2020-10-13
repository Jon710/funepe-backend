/* eslint-disable no-console */
const Env = use('Env');
// const Mail = use('Mail');
const Fornecedor = use('App/Models/Compras/Fornecedor');
const Orcamento = use('App/Models/Compras/Orcamento');
const ItemOrcamento = use('App/Models/Compras/ItemOrcamento');
const Token = use('App/Models/Protocolo/Token');

const sgMail = require('@sendgrid/mail');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

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
      identificador: fornecedor.identificador,
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
      from: 'departamento.compras@funepe.edu.br',
      subject: 'FUNEPE - Orçamento de Preços',
      html: emailContent,
    };

    sgMail
      .send(msg, true)
      .then(() => {
        return response.response.statusCode;
      })
      .catch((err) => {
        console.log(err.response.body);
      });

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

  async getOrcamentoByToken({ response, params }) {
    try {
      const { token } = params;

      const orcamentoComToken = await Token.query()
        .where('token', token)
        .fetch();

      const identificadorJSON = orcamentoComToken.toJSON();

      const orcamento = await Orcamento.query()
        .where('idorcamento', identificadorJSON[0].identificador)
        .fetch();

      const orcamentoJSON = orcamento.toJSON();

      const itemOrcamento = await ItemOrcamento.query()
        .where('idorcamento', orcamentoJSON[0].idorcamento)
        .with('produto')
        .fetch();

      return response.json({
        itemOrcamento,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateMailPrice({ params, request, response }) {
    const { iditemorcamento } = params;
    const itemorcamento = await ItemOrcamento.findOrFail(iditemorcamento);
    const data = request.all();

    itemorcamento.merge(data);
    await itemorcamento.save();

    return response.json({
      itemorcamento,
    });
  }
}

module.exports = SendMailController;
