import { AuthenticationService } from '@/data/authentication.service'
import { User, UserSchema } from '@/domain/user/user.model'
import * as mongoose from 'mongoose'
import { LoginController } from '@/presentation/controllers/user/login.controller'

const userModel = mongoose.model('User', UserSchema) as mongoose.Model<User, {}>

export const makeLoginController = () => {
  const authenticationService = new AuthenticationService(userModel)
  const loginController = new LoginController(authenticationService)
  return loginController
}
