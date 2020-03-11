'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('usuarios', 'UsuarioController.store')
Route.post('sessions', 'SessionController.store')

Route.get('usuarios', 'UsuarioController.getUsuarioById')
