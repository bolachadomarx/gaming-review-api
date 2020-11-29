import { CreateConsoleDto } from './../domain/console/console.dto'
import { Document, Model } from 'mongoose'

export class ConsoleService {
  constructor(private readonly consoleModel: Model<Document>) {}

  async create(console: CreateConsoleDto) {
    const createdConsole = await this.consoleModel.create(console)
    return createdConsole
  }

  async get(_id: string) {
    const console = await this.consoleModel.findById(_id)
    return console
  }

  async list() {
    const consoles = await this.consoleModel.find()
    return consoles
  }

  async update(console: CreateConsoleDto, _id: string) {
    const updated = await this.consoleModel.updateOne({ _id }, console)
    return updated
  }

  async delete(_id: string) {
    const deleted = await this.consoleModel.deleteOne({ _id })
    return deleted
  }
}
