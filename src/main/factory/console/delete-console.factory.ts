import * as mongoose from 'mongoose'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { ConsoleService } from '@/data/console.service'
import { DeleteConsoleController } from '@/presentation/controllers/console/delete-console.controller'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>

export const makeDeleteConsoleController = () => {
  const consoleService = new ConsoleService(consoleModel)
  const deleteConsoleController = new DeleteConsoleController(consoleService)
  return deleteConsoleController
}
