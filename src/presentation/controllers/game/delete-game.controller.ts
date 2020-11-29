import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'

export class DeleteGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idGame = httpRequest.params.idGame
      const game = await this.gameService.delete(idGame)

      return success(game)
    } catch (error) {
      return serverError(error)
    }
  }
}
