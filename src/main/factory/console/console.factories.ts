import { ConsoleService } from '@/data/console.service'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { CreateConsoleController } from '@/presentation/controllers/console/create-console.controller'
import { DeleteConsoleController } from '@/presentation/controllers/console/delete-console.controller'
import { GetAllConsoleController } from '@/presentation/controllers/console/get-all-console.controller'
import { GetConsoleController } from '@/presentation/controllers/console/get-console.controller'
import { UpdateConsoleController } from '@/presentation/controllers/console/update-console.controller'
import * as mongoose from 'mongoose'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>
const consoleService = new ConsoleService(consoleModel)

export const makeCreateConsoleController = () => {
  const createConsoleController = new CreateConsoleController(consoleService)
  return createConsoleController
}

export const makeDeleteConsoleController = () => {
  const deleteConsoleController = new DeleteConsoleController(consoleService)
  return deleteConsoleController
}

export const makeGetAllConsoleController = () => {
  const getAllConsoleController = new GetAllConsoleController(consoleService)
  return getAllConsoleController
}

export const makeGetConsoleController = () => {
  const getConsoleController = new GetConsoleController(consoleService)
  return getConsoleController
}

export const makeUpdateConsoleController = () => {
  const updateConsoleController = new UpdateConsoleController(consoleService)
  return updateConsoleController
}
