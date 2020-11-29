import { GetConsoleController } from '@/presentation/controllers/console/get-console.controller'
import * as mongoose from 'mongoose'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { ConsoleService } from '@/data/console.service'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>

export const makeGetConsoleController = () => {
  const consoleService = new ConsoleService(consoleModel)
  const getConsoleController = new GetConsoleController(consoleService)
  return getConsoleController
}
