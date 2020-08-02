const Route = use('Route');

Route.post('users', 'Protocolo/UserController.store');
Route.post('sessions', 'Protocolo/SessionController.store').validator(
  'Session'
);
Route.get('anexo/:path', 'Protocolo/ArquivoAnexoController.show');
Route.get('anexo/:path', 'Compras/ArquivoAnexoController.show');

Route.get(
  'usuarios/:idusuario',
  'Protocolo/UsuarioController.getUsuarioById'
).middleware(['auth']);

Route.get(
  'produtos/:descricao',
  'Compras/ProdutoController.getProdutoByDescricao'
);

Route.get(
  '/orcamento/:requisicao_id/itensorcamentoreq',
  'Compras/ItemOrcamentoController.getItensOrcamento'
).middleware(['auth']);

Route.group(() => {
  Route.resource('usuarios', 'Protocolo/UsuarioController')
    .apiOnly()
    .validator(new Map([[['Protocolo/usuarios.store'], ['Usuario']]]));

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
    'requisicao.arquivoanexo',
    'Compras/ArquivoAnexoController'
  ).apiOnly();
  Route.resource(
    'despachopadrao',
    'Protocolo/DespachoPadraoController'
  ).apiOnly();
  Route.resource(
    'grupo.usuariogrupo',
    'Protocolo/UsuarioGrupoController'
  ).apiOnly();
  Route.resource('prioridade', 'Protocolo/PrioridadeController').apiOnly();

  // COMPRAS
  Route.resource('tipoempresa', 'Compras/TipoEmpresaController').apiOnly();
  Route.resource('categoria', 'Compras/CategoriaController').apiOnly();
  Route.resource('tipotelefone', 'Compras/TipoTelefoneController').apiOnly();
  Route.resource(
    'empresa.telefoneempresa',
    'Compras/TelefoneEmpresaController'
  ).apiOnly();
  Route.resource('empresa', 'Compras/EmpresaController').apiOnly();
  Route.resource(
    'empresa.emailempresa',
    'Compras/EmailEmpresaController'
  ).apiOnly();
  Route.resource(
    'fornecedor.telefonefavorecido',
    'Compras/TelefoneFavorecidoController'
  ).apiOnly();
  Route.resource('fornecedor', 'Compras/FornecedorController').apiOnly();
  Route.resource(
    'tipofornecedor',
    'Compras/TipoFornecedorController'
  ).apiOnly();
  Route.resource(
    'fornecedor.emailfornecedor',
    'Compras/EmailFornecedorController'
  ).apiOnly();
  Route.resource(
    'fornecedor.enderecofornecedor',
    'Compras/EnderecoFornecedorController'
  ).apiOnly();
  Route.resource('fornecimento', 'Compras/FornecimentoController').apiOnly();
  Route.resource(
    'fornecedor.orcamento',
    'Compras/OrcamentoController'
  ).apiOnly();
  Route.resource('unidademedida', 'Compras/UnidadeMedidaController').apiOnly();
  Route.resource('marca', 'Compras/MarcaController').apiOnly();
  Route.resource('produto', 'Compras/ProdutoController').apiOnly();
  Route.resource(
    'usuario.requisicao',
    'Compras/RequisicaoController'
  ).apiOnly();
  Route.get(
    '/solicitante/:solicitante_id/requisicao',
    'Compras/RequisicaoController.getMyReq'
  );

  Route.get('requisicao/:idreq', 'Compras/RequisicaoController.getReqById');
  Route.get('requisicao/:dtreq', 'Compras/RequisicaoController.getReqByDate');
  Route.get(
    'requisicao/:periodoreq',
    'Compras/RequisicaoController.getReqByPeriodo'
  );

  Route.resource(
    'requisicao.orcamento',
    'Compras/OrcamentoController'
  ).apiOnly();
  Route.resource('departamento', 'Compras/DepartamentoController').apiOnly();
  Route.resource(
    'requisicao.historicorequisicao',
    'Compras/HistoricoRequisicaoController'
  ).apiOnly();
  Route.resource(
    'requisicao.itemrequisicao',
    'Compras/ItemRequisicaoController'
  ).apiOnly();
  Route.resource(
    'orcamento.itemorcamento',
    'Compras/ItemOrcamentoController'
  ).apiOnly();
}).middleware(['auth']);
