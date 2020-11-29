import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'
import { CreateGameDto } from '@/domain/game/game.dto'

export class CreateGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body as CreateGameDto
      const game = await this.gameService.create(body)

      return success(game)
    } catch (error) {
      return serverError(error)
    }
  }
}
