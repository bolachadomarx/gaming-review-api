import * as mongoose from 'mongoose'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { ConsoleService } from '@/data/console.service'
import { UpdateConsoleController } from '@/presentation/controllers/console/update-console.controller'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>

export const makeUpdateConsoleController = () => {
  const consoleService = new ConsoleService(consoleModel)
  const updateConsoleController = new UpdateConsoleController(consoleService)
  return updateConsoleController
}
