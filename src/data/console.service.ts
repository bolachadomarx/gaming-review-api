import { CreateConsoleDto } from './../domain/console/console.dto'
import { Console } from '@/domain/console/console'
import { Document, Model } from 'mongoose'

export class ConsoleService {
  constructor(private readonly consoleModel: Model<Document>) {}

  async create(console: CreateConsoleDto) {
    const createdConsole = await this.consoleModel.create(console)
    return createdConsole
  }

  async list() {
    const consoles = await this.consoleModel.find()
    return consoles
  }
}
