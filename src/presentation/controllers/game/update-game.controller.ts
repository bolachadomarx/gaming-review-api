import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'
import { CreateGameDto } from '@/domain/game/game.dto'

export class UpdateGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body as CreateGameDto
      const idGame = httpRequest.params.idGame
      const game = await this.gameService.update(body, idGame)

      return success(game)
    } catch (error) {
      return serverError(error)
    }
  }
}
