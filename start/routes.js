const Route = use('Route');

Route.post('users', 'Protocolo/UserController.store');
Route.post('sessions', 'Protocolo/SessionController.store').validator(
  'Session'
);
Route.get('anexo/:path', 'Protocolo/ArquivoAnexoController.show');

Route.get(
  'usuarios/:idusuario',
  'Protocolo/UsuarioController.getUsuarioById'
).middleware(['auth']);

Route.group(() => {
  Route.resource('usuarios', 'Protocolo/UsuarioController')
    .apiOnly()
    .validator(new Map([[['usuarios.store'], ['Usuario']]]));

  Route.resource(
    'usuarios.documents',
    'Protocolo/DocumentoController'
  ).apiOnly();
  Route.resource('groups', 'Protocolo/GrupoController').apiOnly();
  Route.resource('roles', 'Protocolo/FuncaoController').apiOnly();
  Route.resource('types', 'Protocolo/TipoDocumentoController').apiOnly();
  Route.resource(
    'documents.despachos',
    'Protocolo/DespachoController'
  ).apiOnly();
  Route.resource(
    'usuarios.caixaentrada',
    'Protocolo/CaixaEntradaController'
  ).apiOnly();
  Route.resource(
    'documents.arquivoanexo',
    'Protocolo/ArquivoAnexoController'
  ).apiOnly();
  Route.resource(
    'despachopadrao',
    'Protocolo/DespachoPadraoController'
  ).apiOnly();
  Route.resource('usuariogrupo', 'Protocolo/UsuarioGrupoController').apiOnly();
  Route.resource('prioridade', 'Protocolo/PrioridadeController').apiOnly();

  Route.resource(
    'tipoempresa.empresa',
    'Compras/TipoEmpresaController'
  ).apiOnly();
  Route.resource('categoria.produto', 'Compras/CategoriaController').apiOnly();
  Route.resource(
    'tipotelefone.empresa',
    'Compras/TipoTelefoneController'
  ).apiOnly();
  Route.resource(
    'telefoneempresa.empresa',
    'TelefoneEmpresaController'
  ).apiOnly();
  Route.resource('empresa', 'Compras/EmpresaController').apiOnly();
  Route.resource('categoria.produto', 'Compras/CategoriaController').apiOnly();
  Route.resource(
    'emailempresa.empresa',
    'Compras/EmailEmpresaController'
  ).apiOnly();
  Route.resource(
    'telefonefavorecido.tipotelefone',
    'TelefoneFavorecidoController'
  ).apiOnly();
  Route.resource('fornecedor', 'Compras/FornecedorController').apiOnly();
  Route.resource(
    'tipofornecedor.fornecedor',
    'Compras/TipoFornecedorController'
  ).apiOnly();
  Route.resource(
    'emailfornecedor.fornecedor',
    'Compras/EmailFornecedorController'
  ).apiOnly();
  Route.resource(
    'enderecofornecedor.fornecedor',
    'Compras/EnderecoFornecedorController'
  ).apiOnly();
  Route.resource(
    'fornecimento.fornecedor',
    'Compras/FornecimentoController'
  ).apiOnly();
  Route.resource(
    'orcamento.fornecedor',
    'Compras/OrcamentoController'
  ).apiOnly();
  Route.resource(
    'unidademedida.produto',
    'Compras/UnidadeMedidaController'
  ).apiOnly();
  Route.resource('marca.produto', 'Compras/MarcaController').apiOnly();
  Route.resource('produto', 'Compras/ProdutoController').apiOnly();
  Route.resource('requisicao', 'Compras/RequisicaoController').apiOnly();
  Route.resource(
    'departamento.requisicao',
    'Compras/DepartamentoController'
  ).apiOnly();
  Route.resource(
    'historicorequisicao.requisicao',
    'Compras/HistoricoRequisicaoController'
  ).apiOnly();
  Route.resource(
    'itemrequisicao.requisicao',
    'Compras/ItemRequisicaoController'
  ).apiOnly();
  Route.resource(
    'itemorcamento.orcamento',
    'Compras/ItemOrcamentoController'
  ).apiOnly();
}).middleware(['auth']);
