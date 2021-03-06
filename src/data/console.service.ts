import { Console } from '@/domain/console/console'
import { CreateConsoleDto } from './../domain/console/console.dto'
import { Document, Model } from 'mongoose'

export class ConsoleService {
  constructor(private readonly consoleModel: Model<Console>) {}

  async create(console: CreateConsoleDto) {
    const createdConsole = await this.consoleModel.create(console)
    return createdConsole
  }

  async get(_id: string) {
    const console = await this.consoleModel.findById(_id)
    return console
  }

  async list(queryParams) {
    const consoles = await this.consoleModel.find(queryParams)
    return consoles
  }

  async update(console: CreateConsoleDto, _id: string) {
    const updated = await this.consoleModel.findOneAndUpdate({ _id }, console)
    return updated
  }

  async delete(_id: string) {
    const deleted = await this.consoleModel.deleteOne({ _id })
    return deleted
  }
}
