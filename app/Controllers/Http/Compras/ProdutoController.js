/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Database = use('Database');
const Produto = use('App/Models/Compras/Produto');

class ProdutoController {
  async index({ response }) {
    const produtos = await Database.raw(
      `select p.idproduto, p.descricao as produto, p.idunidade, p.idmarca, m.descricao as marca, u.descricao as unidade,
      p.valorunitario as valor, p.qtdestoque as quantidade
      from comp_produto p, comp_marca m, comp_unidademedida u
      where p.idunidade = u.idunidade and p.idmarca = m.idmarca
      order by p.descricao
      `
    );

    const listaProdutos = produtos.rows;

    return response.json({
      listaProdutos,
    });
  }

  async getProdutoByDescricao({ params, response }) {
    const { descricao } = params;

    const produtos = await Database.raw(
      `select *, p.idproduto, p.descricao as produto, p.idunidade, p.idmarca, m.descricao as marca, u.descricao as unidade
      from comp_produto p, comp_marca m, comp_unidademedida u
      where p.idunidade = u.idunidade and p.idmarca = m.idmarca and
      p.descricao ilike ?`,
      [`%${descricao}%`]
    );

    const listaProdutos = produtos.rows;

    return response.json({
      listaProdutos,
    });
  }

  // produtos/id/:idproduto
  async getProdutoByID({ params, response }) {
    const { idproduto } = params;

    const produto = await Database.raw(
      `select p.idproduto, p.descricao as produto, p.idunidade, p.idmarca, m.descricao as marca, u.descricao as unidade
      from comp_produto p, comp_marca m, comp_unidademedida u
      where p.idunidade = u.idunidade and p.idmarca = m.idmarca and
      p.idproduto = ?`,
      [idproduto]
    );

    const produtoPorID = produto.rows;

    return response.json({
      produtoPorID,
    });
  }

  async store({ request, response }) {
    const data = request.only([
      'idproduto',
      'idmarca',
      'idunidade',
      'descricao',
    ]);

    const productExists = await Database.raw(
      `SELECT descricao FROM public.comp_produto
    WHERE descricao ilike ?
    `,
      [data.descricao]
    );

    if (productExists.rowCount > 0) {
      return response.status(400).json({ error: 'Esse produto já existe!' });
    }

    const produto = await Produto.create(data);

    return response.json({
      produto,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const produto = await Produto.query()
      .where('idproduto', id)
      .with('unidademedida')
      .with('marca')
      .with('categoria')
      .fetch();

    return response.json({
      produto,
    });
  }

  async update({ params, request, response }) {
    try {
      const { id } = params;
      const produto = await Produto.findOrFail(id);
      const data = request.all();

      produto.merge(data);
      await produto.save();

      return response.json({
        produto,
      });
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao atualizar produto!' });
    }
  }
}

module.exports = ProdutoController;
