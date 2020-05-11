const Route = use('Route');

Route.post('users', 'UserController.store');
Route.post('sessions', 'SessionController.store').validator('Session');
Route.get('anexo/:path', 'ArquivoAnexoController.show');

Route.get(
  'usuarios/:idusuario',
  'UsuarioController.getUsuarioById'
).middleware(['auth']);

Route.group(() => {
  Route.resource('usuarios', 'UsuarioController')
    .apiOnly()
    .validator(new Map([[['usuarios.store'], ['Usuario']]]));

  Route.resource('usuarios.documents', 'DocumentoController').apiOnly();
  Route.resource('groups', 'GrupoController').apiOnly();
  Route.resource('roles', 'FuncaoController').apiOnly();
  Route.resource('types', 'TipoDocumentoController').apiOnly();
  Route.resource('documents.despachos', 'DespachoController').apiOnly();
  Route.resource('usuarios.caixaentrada', 'CaixaEntradaController').apiOnly();
  Route.resource('documents.arquivoanexo', 'ArquivoAnexoController').apiOnly();
  Route.resource('despachopadrao', 'DespachoPadraoController').apiOnly();
  Route.resource('usuariogrupo', 'UsuarioGrupoController').apiOnly();
  Route.resource('prioridade', 'PrioridadeController').apiOnly();

  Route.resource('tipoempresa.empresa', 'TipoEmpresaController').apiOnly();
  Route.resource('categoria.produto', 'CategoriaController').apiOnly();
  Route.resource('tipotelefone.empresa', 'TipoTelefoneController').apiOnly();
  Route.resource(
    'telefoneempresa.empresa',
    'TelefoneEmpresaController'
  ).apiOnly();
  Route.resource('empresa', 'EmpresaController').apiOnly();
  Route.resource('categoria.produto', 'CategoriaController').apiOnly();
  Route.resource('emailempresa.empresa', 'EmailEmpresaController').apiOnly();
  Route.resource(
    'telefonefavorecido.tipotelefone',
    'TelefoneFavorecidoController'
  ).apiOnly();
  Route.resource('fornecedor', 'FornecedorController').apiOnly();
  Route.resource(
    'tipofornecedor.fornecedor',
    'TipoFornecedorController'
  ).apiOnly();
  Route.resource(
    'emailfornecedor.fornecedor',
    'EmailFornecedorController'
  ).apiOnly();
  Route.resource(
    'enderecofornecedor.fornecedor',
    'EnderecoFornecedorController'
  ).apiOnly();
  Route.resource('fornecimento.fornecedor', 'FornecimentoController').apiOnly();
  Route.resource('orcamento.fornecedor', 'OrcamentoController').apiOnly();
  Route.resource('unidademedida.produto', 'UnidadeMedidaController').apiOnly();
  Route.resource('marca.produto', 'MarcaController').apiOnly();
  Route.resource('produto', 'ProdutoController').apiOnly();
  Route.resource('requisicao', 'RequisicaoController').apiOnly();
  Route.resource('departamento.requisicao', 'DepartamentoController').apiOnly();
  Route.resource(
    'historicorequisicao.requisicao',
    'HistoricoRequisicaoController'
  ).apiOnly();
  Route.resource(
    'itemrequisicao.requisicao',
    'ItemRequisicaoController'
  ).apiOnly();
  Route.resource(
    'itemorcamento.orcamento',
    'ItemOrcamentoController'
  ).apiOnly();
}).middleware(['auth']);
