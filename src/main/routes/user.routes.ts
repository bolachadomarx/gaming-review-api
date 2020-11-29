import { makeLoginController } from './../factory/user/login.factory'
import { makeSignupController } from './../factory/user/signup.factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
