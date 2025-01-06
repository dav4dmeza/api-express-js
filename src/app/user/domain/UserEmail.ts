import { UserInvalidArgument } from './UserInvalidArgument'

export class UserEmail {
  value: string

  constructor(value: string) {
    this.value = value
    this.validate()
  }

  private validate() {
    const emailRegExp: RegExp =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (!emailRegExp.test(this.value)) {
      throw new UserInvalidArgument('El correo electrónico no es válido.')
    }
  }
}
