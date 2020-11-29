import { notFound } from './../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'

export class GetGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idGame = httpRequest.params.idGame
      const game = await this.gameService.get(idGame)

      return game ? success(game) : notFound(new Error('Game not found'))
    } catch (error) {
      return serverError(error)
    }
  }
}
