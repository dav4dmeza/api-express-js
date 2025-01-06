import express, { Application, Router } from 'express'

type Option = {
  port: number
  router: Router
}

export class AppServer {
  private readonly app: Application = express()
  private readonly port: number
  private readonly router: Router

  constructor(options: Option) {
    const { port, router } = options

    this.port = port
    this.router = router
  }

  start(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(this.router)

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}
