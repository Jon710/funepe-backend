'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
// Route.post('usuarios', 'UsuarioController.store')
Route.post('sessions', 'SessionController.store')

Route.get('usuarios/:idusuario', 'UsuarioController.getUsuarioById')

Route.group(() => {
  Route.resource('usuarios', 'UsuarioController').apiOnly()
  Route.resource('documents', 'DocumentoController').apiOnly()
  Route.resource('groups', 'GrupoController').apiOnly()
  Route.resource('roles', 'FuncaoController').apiOnly()
  Route.resource('types', 'TipoDocumentoController').apiOnly()
  Route.resource('documents.despachos', 'DespachoController').apiOnly()
  Route.resource('usuarios.caixaentrada', 'CaixaEntradaController').apiOnly()
  Route.resource('documents.arquivoanexo', 'ArquivoAnexoController').apiOnly()
  Route.resource('despachopadrao', 'DespachoPadraoController').apiOnly()
  Route.resource('usuariogrupo', 'UsuarioGrupoController').apiOnly()
  Route.resource('prioridade', 'PrioridadeController').apiOnly()
})
