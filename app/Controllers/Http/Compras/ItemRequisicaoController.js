/* eslint-disable camelcase */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ItemRequisicao = use('App/Models/Compras/ItemRequisicao');
const Database = use('Database');

class ItemRequisicaoController {
  // /requisicao/:requisicao_id/itemrequisicao
  async index({ response, params }) {
    const { requisicao_id } = params;
    console.log('ITENS: ');
    const itensrequisicao = await ItemRequisicao.query()
      .where('idrequisicao', requisicao_id)
      .with('requisicao')
      .with('produto')
      .with('produto.unidademedida')
      .fetch();

    const itensReq = await Database.raw(
      `select i.idproduto, i.idorcamento, i.quantidade, i.valorunitario, p.descricao, f.nomefantasia, i.valortotal
      from comp_itemorcamento as i, comp_orcamento as o, comp_produto as p, comp_fornecedor as f
      where (i.idorcamento = o.idorcamento and
        p.idproduto = i.idproduto and
        f.idfornecedor = o.idfornecedor and
        o.idrequisicao = ?) and i.valortotal IN
      (select min(i.valortotal) from comp_itemorcamento as i, comp_orcamento as o
      group by i.idproduto
      order by p.descricao)
      `,
      [requisicao_id]
    );

    console.log('ITENS: ', itensReq.rows);

    return response.json({
      itensrequisicao,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const itemrequisicao = await ItemRequisicao.create(data);

    return response.json({
      itemrequisicao,
    });
  }

  async show({ params, response }) {
    const { id } = params;
    console.log('ITENS: ');

    const itemrequisicao = await ItemRequisicao.findOrFail(id);

    return response.json({
      itemrequisicao,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const itemrequisicao = await ItemRequisicao.findOrFail(id);
    const data = request.all();

    itemrequisicao.merge(data);
    await itemrequisicao.save();

    return response.json({
      itemrequisicao,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const itemrequisicao = await ItemRequisicao.findOrFail(id);

    await itemrequisicao.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = ItemRequisicaoController;
