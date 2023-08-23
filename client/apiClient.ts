/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function fetchWidgets() {
  const res = await request.get(widgetUrl)
  return res.body as Widget[]
}
