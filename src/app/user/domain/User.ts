import { UserEmail } from './UserEmail'
import { UserId } from './UserId'
import { UserName } from './UserName'

export class User {
  readonly id: UserId
  readonly name: UserName
  readonly email: UserEmail

  constructor(id: UserId, name: UserName, email: UserEmail) {
    this.id = id
    this.name = name
    this.email = email
  }

  toPrimitive() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
    }
  }
}
