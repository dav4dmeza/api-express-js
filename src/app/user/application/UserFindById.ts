import { User } from '../domain/User'
import { UserId } from '../domain/UserId'
import { UserNotFount } from '../domain/UserNotFound'
import { UserRepository } from '../domain/UserRepository'

export class UserFindById {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.findById(new UserId(id))

    if (!user) {
      throw new UserNotFount('El usuario no fue encontrado.')
    }

    return user
  }
}
