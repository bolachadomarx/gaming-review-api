import { makeCreateConsoleController } from '../factory/create-console.factory'
import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/console', adaptRoute(makeCreateConsoleController()))
}
