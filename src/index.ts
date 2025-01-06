import { AppRouter } from './app/AppRouter'
import { AppServer } from './app/AppServer'

function main() {
  new AppServer({
    port: 3000,
    router: AppRouter.router,
  }).start()
}

;(() => {
  main()
})()
