import { AuthenticationService } from './../../../data/authentication.service'
import { serverError, success, unauthorized } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class LoginController implements Controller {
  constructor(private readonly authenticationService: AuthenticationService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const user = await this.authenticationService.login(email, password)
      if (!user) {
        return unauthorized()
      }
      return success(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
