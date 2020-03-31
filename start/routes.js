'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')

Route.post('sessions', 'SessionController.store')

Route.get('usuarios/:idusuario', 'UsuarioController.getUsuarioById').middleware(['auth'])

Route.group(() => {
  Route.resource('usuarios', 'UsuarioController').apiOnly().middleware(['auth'])
  Route.resource('usuarios.documents', 'DocumentoController').apiOnly().middleware(['auth'])
  Route.resource('groups', 'GrupoController').apiOnly().middleware(['auth'])
  Route.resource('roles', 'FuncaoController').apiOnly().middleware(['auth'])
  Route.resource('types', 'TipoDocumentoController').apiOnly().middleware(['auth'])
  Route.resource('documents.despachos', 'DespachoController').apiOnly().middleware(['auth'])
  Route.resource('usuarios.caixaentrada', 'CaixaEntradaController').apiOnly().middleware(['auth'])
  Route.resource('documents.arquivoanexo', 'ArquivoAnexoController').apiOnly().middleware(['auth'])
  Route.resource('despachopadrao', 'DespachoPadraoController').apiOnly().middleware(['auth'])
  Route.resource('usuariogrupo', 'UsuarioGrupoController').apiOnly().middleware(['auth'])
  Route.resource('prioridade', 'PrioridadeController').apiOnly().middleware(['auth'])
})
