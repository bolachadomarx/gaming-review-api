import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { ConsoleService } from '@/data/console.service'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'

export class DeleteConsoleController implements Controller {
  constructor(private readonly consoleService: ConsoleService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const idConsole = httpRequest.params.idConsole
      const console = await this.consoleService.delete(idConsole)

      return success(console)
    } catch (error) {
      return serverError(error)
    }
  }
}
