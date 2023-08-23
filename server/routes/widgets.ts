import express from 'express'
import { getWidgets, deleteWidget, insertWidget } from '../db/db.ts'

const router = express.Router()
//'/api/v1/widgets'
router.get('/', async (req, res) => {
  try {
    const widgets = await getWidgets()
    res.json(widgets)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const newWidget = req.body
    await insertWidget(newWidget)
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
    await deleteWidget(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
})

export default router
