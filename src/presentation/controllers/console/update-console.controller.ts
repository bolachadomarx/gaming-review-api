import { Controller } from '../../protocols/controller'
import { CreateConsoleDto } from '@/domain/console/console.dto'
import { success } from '../../helpers/http-helper'
import { ConsoleService } from '@/data/console.service'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'

export class UpdateConsoleController implements Controller {
  constructor(private readonly consoleService: ConsoleService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body as CreateConsoleDto
      const idConsole = httpRequest.params.idConsole
      const console = await this.consoleService.update(body, idConsole)

      return success(console)
    } catch (error) {
      return serverError(error)
    }
  }
}
