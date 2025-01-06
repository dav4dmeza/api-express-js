import { Router } from 'express'
import { UserController } from './UserController'

export class UserRouter {
  static get router(): Router {
    const router: Router = Router()
    const user: UserController = new UserController()

    router.get('/', user.findAll)
    router.get('/:id', user.findById)
    router.post('/', user.create)
    router.put('/:id', user.update)
    router.delete('/:id', user.remove)

    return router
  }
}
