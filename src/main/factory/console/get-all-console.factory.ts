import * as mongoose from 'mongoose'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { ConsoleService } from '@/data/console.service'
import { GetAllConsoleController } from '@/presentation/controllers/console/get-all-console.controller'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>

export const makeGetAllConsoleController = () => {
  const consoleService = new ConsoleService(consoleModel)
  const getAllConsoleController = new GetAllConsoleController(consoleService)
  return getAllConsoleController
}
