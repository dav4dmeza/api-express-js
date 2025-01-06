import { Router } from 'express'
import { UserRouter } from './user/infrastructure/UserRouter'

export class AppRouter {
  static get router(): Router {
    const router: Router = Router()

    router.use('/api/user', UserRouter.router)

    return router
  }
}
