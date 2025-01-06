import { UserInvalidArgument } from './UserInvalidArgument'

export class UserName {
  value: string

  constructor(value: string) {
    this.value = value
    this.validate()
  }

  private validate() {
    const MIN_LENGTH: number = 2
    const MAX_LENGTH: number = 50

    if (this.value.length < MIN_LENGTH) {
      throw new UserInvalidArgument(
        `El nombre debe tener una longitud mínima de ${MIN_LENGTH} caracteres.`
      )
    }

    if (this.value.length > MAX_LENGTH) {
      throw new UserInvalidArgument(
        `El nombre debe tener una longitud máxima de ${MAX_LENGTH} caracteres.`
      )
    }
  }
}
