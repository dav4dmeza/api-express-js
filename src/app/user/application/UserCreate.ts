import { User } from '../domain/User'
import { UserEmail } from '../domain/UserEmail'
import { UserId } from '../domain/UserId'
import { UserName } from '../domain/UserName'
import { UserRepository } from '../domain/UserRepository'

export class UserCreate {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string, name: string, email: string): Promise<void> {
    await this.repository.create(
      new User(new UserId(id), new UserName(name), new UserEmail(email))
    )
  }
}
