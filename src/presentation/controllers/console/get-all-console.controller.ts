import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { ConsoleService } from '@/data/console.service'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'

export class GetAllConsoleController implements Controller {
  constructor(private readonly consoleService: ConsoleService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const queryParams = httpRequest.query
      const consoles = await this.consoleService.list(queryParams)

      return success(consoles)
    } catch (error) {
      return serverError(error)
    }
  }
}
