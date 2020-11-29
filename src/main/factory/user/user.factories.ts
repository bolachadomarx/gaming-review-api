import { AuthenticationService } from '@/data/authentication.service'
import { User, UserSchema } from '@/domain/user/user.model'
import * as mongoose from 'mongoose'
import { LoginController } from '@/presentation/controllers/user/login.controller'
import { UserService } from '@/data/user.service'
import { SignupController } from '@/presentation/controllers/user/signup.controller'

const userModel = mongoose.model('User', UserSchema) as mongoose.Model<User, {}>
const authenticationService = new AuthenticationService(userModel)
const userService = new UserService(userModel)

export const makeLoginController = () => {
  const loginController = new LoginController(authenticationService)
  return loginController
}

export const makeSignupController = () => {
  const signupController = new SignupController(userService)
  return signupController
}
