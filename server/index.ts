import server from './server.ts'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
