import { User } from './User'
import { UserId } from './UserId'

export interface UserRepository {
  findAll(): Promise<User[]>
  findById(id: UserId): Promise<User | null>
  create(user: User): Promise<void>
  update(user: User): Promise<void>
  remove(id: UserId): Promise<void>
}
