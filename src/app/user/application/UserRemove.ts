import { UserId } from '../domain/UserId'
import { UserRepository } from '../domain/UserRepository'

export class UserRemove {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<void> {
    await this.repository.remove(new UserId(id))
  }
}
