import { GameService } from '@/data/game.service'
import { GameSchema, Game } from '@/domain/game/game'
import { CreateGameController } from '@/presentation/controllers/game/create-game.controller'
import { DeleteGameController } from '@/presentation/controllers/game/delete-game.controller'
import { GetAllGameController } from '@/presentation/controllers/game/get-all-game.controller'
import { GetGameController } from '@/presentation/controllers/game/get-game.controller'
import { UpdateGameController } from '@/presentation/controllers/game/update-game.controller'
import * as mongoose from 'mongoose'

const gameModel = mongoose.model('Game', GameSchema) as mongoose.Model<Game, {}>
const gameService = new GameService(gameModel)

export const makeCreateGameController = () => {
  const createGameController = new CreateGameController(gameService)
  return createGameController
}

export const makeDeleteGameController = () => {
  const deleteGameController = new DeleteGameController(gameService)
  return deleteGameController
}

export const makeGetAllGameController = () => {
  const getAllGameController = new GetAllGameController(gameService)
  return getAllGameController
}

export const makeGetGameController = () => {
  const getGameController = new GetGameController(gameService)
  return getGameController
}

export const makeUpdateGameController = () => {
  const updateGameController = new UpdateGameController(gameService)
  return updateGameController
}
