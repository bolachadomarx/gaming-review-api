import { badRequest } from '@/presentation/helpers/http-helper'
import { Model, Document } from 'mongoose'
import { CreateUserDto } from '@/domain/user/user.dto'
import { User } from '@/domain/user/user.model'

export class UserService {
  constructor(private readonly userModel: Model<User>) {}

  async create(user: CreateUserDto) {
    const checkUser = await this.userModel.findOne({ email: user.email }).exec()
    if (checkUser) {
      throw badRequest(new Error('Usuário já existe'))
    }
    const newUser = new this.userModel({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    })
    const result = await newUser.save()
    return result
  }
}
