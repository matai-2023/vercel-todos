/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { NewWidget, Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function fetchWidgets() {
  const res = await request.get(widgetUrl)
  return res.body as Widget[]
}

export async function deleteWidget(id: number) {
  await request.delete(`${widgetUrl}${id}`)
}

export async function addWidget(newWidget: NewWidget) {
  await request.post(widgetUrl).send(newWidget)
}
