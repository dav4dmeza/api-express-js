import { Request, Response } from 'express'
import { UserCreate } from '../application/UserCreate'
import { UserFindAll } from '../application/UserFindAll'
import { UserFindById } from '../application/UserFindById'
import { UserRemove } from '../application/UserRemove'
import { UserUpdate } from '../application/UserUpdate'
import { UserInvalidArgument } from '../domain/UserInvalidArgument'
import { UserNotFount } from '../domain/UserNotFound'
import { InMemoryRepositoryImp } from './InMemoryRepositoryImp'

export class UserController {
  private readonly repository: InMemoryRepositoryImp =
    new InMemoryRepositoryImp()

  findAll = (_req: Request, res: Response): void => {
    new UserFindAll(this.repository)
      .run()
      .then((users) =>
        res.status(200).json(users.map((user) => user.toPrimitive()))
      )
      .catch((err) => this.handleError(err, res))
  }

  findById = (req: Request, res: Response): void => {
    const { id } = req.params

    new UserFindById(this.repository)
      .run(id)
      .then((user) => res.status(200).json(user.toPrimitive()))
      .catch((err) => this.handleError(err, res))
  }

  create = (req: Request, res: Response): void => {
    const { id, name, email } = req.body

    new UserCreate(this.repository)
      .run(id, name, email)
      .then(() => res.status(201).json({ id, name, email }))
      .catch((err) => this.handleError(err, res))
  }

  update = (req: Request, res: Response): void => {
    const { id } = req.params
    const { name, email } = req.body

    new UserUpdate(this.repository)
      .run(id, name, email)
      .then(() => res.status(200).json({ id, name, email }))
      .catch((err) => this.handleError(err, res))
  }

  remove = (req: Request, res: Response): void => {
    const { id } = req.params

    new UserRemove(this.repository)
      .run(id)
      .then(() => res.status(200).send())
      .catch((err) => this.handleError(err, res))
  }

  private handleError = (err: unknown, res: Response) => {
    if (err instanceof UserInvalidArgument) {
      return res.status(400).json({ error: err.message })
    }

    if (err instanceof UserNotFount) {
      return res.status(404).json({ error: err.message })
    }

    console.log(err)
    return res.status(500).json({ error: 'Lo sentimos, ocurrió un error.' })
  }
}
