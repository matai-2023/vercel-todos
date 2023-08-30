import connection from './connection.ts'

import { NewTodo, Todo } from '../../types/Todo.ts'

export function getTodos(db = connection): Promise<Todo[]> {
  return db<Todo>('todos').select()
}

export function deleteTodo(id: number, db = connection) {
  return db<Todo>('todos').where('id', id).del()
}

export function insertTodo(todo: NewTodo, db = connection) {
  return db('todos').insert(todo)
}
