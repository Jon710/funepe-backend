/* eslint-disable no-console */
const Env = use('Env');
// const Mail = use('Mail');
const Fornecedor = use('App/Models/Compras/Fornecedor');
const Orcamento = use('App/Models/Compras/Orcamento');
const ItemOrcamento = use('App/Models/Compras/ItemOrcamento');
const Token = use('App/Models/Protocolo/Token');
const Notification = use('App/Models/Compras/Notification');

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

    const emailSucesso = `<p>
    E-mail para ${fornecedorData.nomefantasia} enviado com sucesso!
  </p>`;

    const msg = [
      {
        to: `${fornecedorData.emailprincipal}`,
        from: `${Env.get('EMAIL_FUNEPE')}`,
        subject: 'FUNEPE - Orçamento de Preços',
        html: emailContent,
      },
      {
        to: `${Env.get('EMAIL_FUNEPE')}`,
        from: `${Env.get('EMAIL_FUNEPE')}`,
        subject: 'FUNEPE - Orçamento de Preços',
        html: emailSucesso,
      },
    ];

    sgMail
      .send(msg[0], true)
      .then(() => {
        sgMail.send(msg[1], true);
        return response.json({
          message: 'E-mail enviado!',
        });
      })
      .catch((err) => {
        if (err.response.body.errors.length > 0) {
          return response.status(501).json({
            message: 'Erro no envio de e-mail.',
          });
        }
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

    const newItemOrcamento = await ItemOrcamento.query()
      .where('iditemorcamento', iditemorcamento)
      .with('orcamento')
      .with('orcamento.fornecedor')
      .fetch();

    const newItemOrcamentoJSON = newItemOrcamento.toJSON();

    Notification.create({
      idusuario: newItemOrcamentoJSON[0].orcamento.idsolicitante,
      content: `Você recebeu o orçamento ${newItemOrcamentoJSON[0].idorcamento} do Fornecedor ${newItemOrcamentoJSON[0].orcamento.fornecedor.nomefantasia}!`,
      read: false,
    });
    

    return response.json({
      itemorcamento,
    });
  }
}

module.exports = SendMailController;
