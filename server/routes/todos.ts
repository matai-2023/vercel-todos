import express from 'express'
import { getTodos, insertTodo, deleteTodo } from '../db/db.ts'

const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await insertTodo(newTodo)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
})

export default router
