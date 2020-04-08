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
}).middleware(['auth']);
