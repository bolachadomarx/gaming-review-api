import * as mongoose from 'mongoose'
import { Console, ConsoleSchema } from '@/domain/console/console'
import { ConsoleService } from '@/data/console.service'
import { Model } from 'mongoose'
import { CreateConsoleController } from '@/presentation/controllers/console/create-console.controller'

const consoleModel = mongoose.model('Console', ConsoleSchema) as mongoose.Model<Console, {}>

export const makeCreateConsoleController = () => {
  const consoleService = new ConsoleService(consoleModel)
  const createConsoleController = new CreateConsoleController(consoleService)
  return createConsoleController
}
