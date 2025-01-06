import { User } from '../domain/User'
import { UserId } from '../domain/UserId'
import { UserRepository } from '../domain/UserRepository'

export class InMemoryRepositoryImp implements UserRepository {
  private users: User[] = []

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findById(id: UserId): Promise<User | null> {
    const user = this.users.find((user) => user.id.value === id.value)
    return user ? user : null
  }

  async create(user: User): Promise<void> {
    this.users = [...this.users, user]
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex(
      (_user) => _user.id.value === user.id.value
    )
    this.users[index] = user
  }

  async remove(id: UserId): Promise<void> {
    const index = this.users.findIndex((user) => user.id.value === id.value)
    this.users.splice(index, 1)
  }
}
