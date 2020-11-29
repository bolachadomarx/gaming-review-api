import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'
import {
  makeCreateConsoleController,
  makeUpdateConsoleController,
  makeGetAllConsoleController,
  makeGetConsoleController,
  makeDeleteConsoleController,
} from '@/main/factory/console/console.factories'

export default (router: Router): void => {
  router.post('/console', adaptRoute(makeCreateConsoleController()))
  router.put('/console/:idConsole', adaptRoute(makeUpdateConsoleController()))
  router.get('/console', adaptRoute(makeGetAllConsoleController()))
  router.get('/console/:idConsole', adaptRoute(makeGetConsoleController()))
  router.delete('/console/:idConsole', adaptRoute(makeDeleteConsoleController()))
}
