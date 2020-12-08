import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'

export class GetAllGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const queryParams = httpRequest.query
      const games = await this.gameService.list(queryParams)

      return success(games)
    } catch (error) {
      return serverError(error)
    }
  }
}
