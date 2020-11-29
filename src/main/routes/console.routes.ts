import { makeGetConsoleController } from '@/main/factory/console/get-console.factory'
import { makeGetAllConsoleController } from '@/main/factory/console/get-all-console.factory'
import { makeUpdateConsoleController } from '@/main/factory/console/update-console.factory'
import { makeCreateConsoleController } from '@/main/factory/console/create-console.factory'
import { adaptRoute } from './../adapters/express-route-adapter'
import { Router } from 'express'
import { makeDeleteConsoleController } from '@/main/factory/console/delete-console.factory'

export default (router: Router): void => {
  router.post('/console', adaptRoute(makeCreateConsoleController()))
  router.put('/console/:idConsole', adaptRoute(makeUpdateConsoleController()))
  router.get('/console', adaptRoute(makeGetAllConsoleController()))
  router.get('/console/:idConsole', adaptRoute(makeGetConsoleController()))
  router.delete('/console/:idConsole', adaptRoute(makeDeleteConsoleController()))
}
