import { User } from './../domain/user/user.model'
import { Model, Document } from 'mongoose'
import jwt from 'jsonwebtoken'

export class AuthenticationService {
  constructor(private readonly userModel: Model<User>) {}

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email }).exec()
    if (user && user.password === password) {
      const accessToken = jwt.sign(email, 'IEWRGN038')
      const loggedUser = await this.userModel.findOneAndUpdate({ email }, { accessToken })
      if (loggedUser) {
        return loggedUser
      }
    }
    return null
  }
}
