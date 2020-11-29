import { SignupController } from '@/presentation/controllers/user/signup.controller'
import { UserService } from '@/data/user.service'
import { User, UserSchema } from '@/domain/user/user.model'
import * as mongoose from 'mongoose'

const userModel = mongoose.model('User', UserSchema) as mongoose.Model<User, {}>

export const makeSignupController = () => {
  const userService = new UserService(userModel)
  const signupController = new SignupController(userService)
  return signupController
}
