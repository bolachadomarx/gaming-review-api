import { UserService } from './../../../data/user.service'
import { notFound } from './../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { success } from '../../helpers/http-helper'
import { serverError } from '../../helpers'
import { HttpRequest, HttpResponse } from '../../protocols'

export class SignupController implements Controller {
  constructor(private readonly userService: UserService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.body
      const console = await this.userService.create(user)

      return success(console)
    } catch (error) {
      return serverError(error)
    }
  }
}
