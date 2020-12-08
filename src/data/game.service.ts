import { Game } from './../domain/game/game'
import { Model } from 'mongoose'
import { CreateGameDto } from '@/domain/game/game.dto'

export class GameService {
  constructor(private readonly gameModel: Model<Game>) {}

  async create(game: CreateGameDto) {
    const createdGame = await this.gameModel.create(game)
    return createdGame
  }

  async get(_id: string) {
    const game = await this.gameModel.findById(_id)
    return game
  }

  async list(queryParams) {
    const games = await this.gameModel.find(queryParams)
    return games
  }

  async update(game: CreateGameDto, _id: string) {
    const updated = await this.gameModel.findOneAndUpdate({ _id }, game)
    return updated
  }

  async delete(_id: string) {
    const deleted = await this.gameModel.deleteOne({ _id })
    return deleted
  }
}
