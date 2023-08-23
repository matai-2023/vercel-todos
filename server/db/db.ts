import connection from './connection.ts'

import { Widget } from '../../models/Widget.ts'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function deleteWidget(id: number, db = connection) {
  return db<Widget>('widgets').where('id', id).del()
}
