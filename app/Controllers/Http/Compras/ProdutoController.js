/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Database = use('Database');
const Produto = use('App/Models/Compras/Produto');

class ProdutoController {
  async index({ response }) {
    const produtos = await Produto.all();

    return response.json({
      produtos,
    });
  }

  async getProdutoByDescricao({ params, response }) {
    const { descricao } = params;

    const produtos = await Database.raw(
      'select * from comp_produto where descricao like ?',
      [`%${descricao}%`]
    );
    const listaProdutos = produtos.rows;

    return response.json({
      listaProdutos,
    });
  }

  async store({ request, response }) {
    const data = request.all();

    const produto = await Produto.create(data);

    return response.json({
      produto,
    });
  }

  async show({ params, response }) {
    const { id } = params;

    const produto = await Produto.findOrFail(id);

    return response.json({
      produto,
    });
  }

  async update({ params, request, response }) {
    const { id } = params;
    const produto = await Produto.findOrFail(id);
    const data = request.all();

    produto.merge(data);
    await produto.save();

    return response.json({
      produto,
    });
  }

  async destroy({ params, response }) {
    const { id } = params;
    const produto = await Produto.findOrFail(id);

    await produto.delete();
    return response.json({
      message: 'Excluído com Sucesso!',
    });
  }
}

module.exports = ProdutoController;
