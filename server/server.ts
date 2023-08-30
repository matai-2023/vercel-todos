import * as Path from 'node:path'
import * as URL from 'node:url'
import serverless from 'serverless-http'

import express from 'express'
import todos from './routes/todos.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/todos', todos)

server.get('/ping', (req, res) => {
  res.send('pong')
})

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode')
  console.log(__dirname)
  server.use(express.static(Path.join(__dirname, '../client')))

  server.get('*', (req, res) => {
    res.sendFile(Path.join(__dirname, 'index.html'))
  })
}

export const handler = serverless(server)
