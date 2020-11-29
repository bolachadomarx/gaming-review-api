import { notFound } from './../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { ConsoleService } from '@/data/console.service'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'

export class GetConsoleController implements Controller {
  constructor(private readonly consoleService: ConsoleService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idConsole = httpRequest.params.idConsole
      const console = await this.consoleService.get(idConsole)

      return console ? success(console) : notFound(new Error('Console not found'))
    } catch (error) {
      return serverError(error)
    }
  }
}
