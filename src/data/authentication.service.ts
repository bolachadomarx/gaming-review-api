import { badRequest } from '@/presentation/helpers/http-helper'
import { Model, Document } from 'mongoose'
import { CreateUserDto } from '@/domain/user/user.dto'
import jwt from 'jsonwebtoken'

export class AuthenticationService {
  constructor(private readonly userModel: Model<Document>) {}

  async login(email: string, password: string) {
    const user = await this.userModel.find({ email })
    if (user) {
      const accessToken = jwt.sign(email, 'IEWRGN038')
      const loggedUser = await this.userModel.update({ email }, { accessToken })
      if (loggedUser) {
        return loggedUser
      }
    }
    return null
  }
}
