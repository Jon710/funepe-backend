/* eslint-disable camelcase */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const ItemOrcamento = use('App/Models/Compras/ItemOrcamento');
const Database = use('Database');

class ItemOrcamentoController {
  // /orcamento/:orcamento_id/itemorcamento
  async index({ response, params }) {
    const { orcamento_id } = params;

    const itensorcamento = await ItemOrcamento.query()
      .where('idorcamento', orcamento_id)
      .with('orcamento')
      .with('orcamento.fornecedor')
      .with('produto')
      .orderBy('iditemorcamento', 'asc')
      .fetch();

    return response.json({
      itensorcamento,
    });
  }

  // /orcamento/:requisicao_id/itensorcamentoreq/:produto_id
  async getItensOrcamentoProduto({ response, params }) {
    const { requisicao_id, produto_id } = params;

    const itensOrcamentoReq = await Database.raw(
      `select i.iditemorcamento, i.idproduto, i.idorcamento, i.quantidade, i.valorunitario, p.descricao, f.nomefantasia, i.valortotal
      from comp_itemorcamento as i, comp_orcamento as o, comp_produto as p, comp_fornecedor as f
      where (i.idorcamento = o.idorcamento and
        p.idproduto = i.idproduto and
        f.idfornecedor = o.idfornecedor and
        o.idrequisicao = ? and i.idproduto = ?)

      `,
      [requisicao_id, produto_id]
    );

    const itensOrcamentoProduto = itensOrcamentoReq.rows;

    return response.json({
      itensOrcamentoProduto,
    });
  }

  // /orcamento/:requisicao_id/itensorcamentoreq
  async getItensOrcamento({ response, params }) {
    const { requisicao_id } = params;

    const itensOrcamentoReq = await Database.raw(
      `select i.idproduto, i.idorcamento, i.quantidade, i.valorunitario, p.descricao, f.nomefantasia, i.valortotal
      from comp_itemorcamento as i, comp_orcamento as o, comp_produto as p, comp_fornecedor as f
      where (i.idorcamento = o.idorcamento and
        p.idproduto = i.idproduto and
        f.idfornecedor = o.idfornecedor and
        o.idrequisicao = ?) and i.valorunitario IN
      (select min(i.valorunitario) from comp_itemorcamento as i, comp_orcamento as o
      group by i.idproduto
      order by p.descricao)
      `,
      [requisicao_id]
    );

    const itensOrcamento = itensOrcamentoReq.rows;

    return response.json({
      itensOrcamento,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const itemorcamento = await ItemOrcamento.create(data);

    return response.json({
      itemorcamento,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const itemorcamento = await ItemOrcamento.findOrFail(id);

    return response.json({
      itemorcamento,
    });
  }

  // /orcamento/:orcamento_id/itemorcamento/:id
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const itemorcamento = await ItemOrcamento.findOrFail(id);

      const data = request.all(['valorunitario']);

      itemorcamento.merge(data);
      await itemorcamento.save();

      return response.json({
        itemorcamento,
      });
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao atualizar produto!' });
    }
  }
}

module.exports = ItemOrcamentoController;
