import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'
import {
  makeCreateGameController,
  makeUpdateGameController,
  makeGetAllGameController,
  makeGetGameController,
  makeDeleteGameController,
} from '@/main/factory/game/game.factories'

export default (router: Router): void => {
  router.post('/game', adaptRoute(makeCreateGameController()))
  router.put('/game/:idGame', adaptRoute(makeUpdateGameController()))
  router.get('/game', adaptRoute(makeGetAllGameController()))
  router.get('/game/:idGame', adaptRoute(makeGetGameController()))
  router.delete('/game/:idGame', adaptRoute(makeDeleteGameController()))
}
