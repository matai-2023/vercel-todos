import express from 'express'
import { getWidgets } from '../db/db.ts'

const router = express.Router()

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

export default router
