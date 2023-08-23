import connection from './connection.ts'

import { NewWidget, Widget } from '../../models/Widget.ts'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function deleteWidget(id: number, db = connection) {
  return db<Widget>('widgets').where('id', id).del()
}

export function insertWidget(newWidget: NewWidget, db = connection) {
  return db('widgets').insert(newWidget)
}
