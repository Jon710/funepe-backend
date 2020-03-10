'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('usuarios', 'UsuarioController.store')

Route.get('usuarios', 'UsuarioController.getUsuarioById')
