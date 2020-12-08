import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'
import { GameService } from '@/data/game.service'
import R from 'ramda'

export class GetAllGameController implements Controller {
  constructor(private readonly gameService: GameService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const queryParams = httpRequest.query
      const games = await this.gameService.list(queryParams)

      const filteredGames = games.map((game) => {
        let ratingSum = 0
        game.reviews.forEach((review) => {
          ratingSum = review.rating + ratingSum
        })
        return { game, ratingSum }
      })
      const sortedArray = R.reverse(R.sortBy(R.prop('ratingSum'), filteredGames))

      const definitive = sortedArray.map((item) => {
        return item.game
      })

      console.log(definitive)

      return success(definitive)
    } catch (error) {
      return serverError(error)
    }
  }
}
