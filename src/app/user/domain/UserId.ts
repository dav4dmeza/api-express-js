import { UserInvalidArgument } from './UserInvalidArgument'

export class UserId {
  value: string

  constructor(value: string) {
    this.value = value
    this.validate()
  }

  private validate() {
    const MIN_LENGTH: number = 1
    const MAX_LENGTH: number = 10

    if (this.value.length < MIN_LENGTH) {
      throw new UserInvalidArgument(
        `El id debe tener una longitud mínima de ${MIN_LENGTH} caracteres.`
      )
    }

    if (this.value.length > MAX_LENGTH) {
      throw new UserInvalidArgument(
        `El id debe tener una longitud máxima de ${MAX_LENGTH} caracteres.`
      )
    }
  }
}
