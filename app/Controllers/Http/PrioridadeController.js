/* eslint-disable camelcase */
'use strict'

const Prioridade = use('App/Models/Prioridade')

class PrioridadeController {
  async index () {
    const prioridades = await Prioridade.all()

    return prioridades
  }

  async store ({ request }) {
    const data = request.all()
    const prioridade = await Prioridade.create(data)

    return prioridade
  }

  async show ({ params }) {
    const { id } = params
    const prioridade = await Prioridade.findOrFail(id)

    return prioridade
  }

  async update ({ params, request }) {
    const { id } = params
    const prioridade = await Prioridade.findOrFail(id)
    const data = request.all()

    prioridade.merge(data)
    await prioridade.save()

    return prioridade
  }

  async destroy ({ params }) {
    const { id } = params
    const prioridade = await Prioridade.findOrFail(id)

    await prioridade.delete()
  }
}

module.exports = PrioridadeController
