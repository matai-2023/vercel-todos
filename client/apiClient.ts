/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { NewTodo, Todo } from '../types/Todo'

const todoUrl = '/api/v1/todos/'

export async function fetchTodos() {
  const res = await request.get(todoUrl)
  return res.body as Todo[]
}

export async function deleteTodo(id: number) {
  await request.delete(`${todoUrl}${id}`)
}

export async function addTodo(newTodo: NewTodo) {
  await request.post(todoUrl).send(newTodo)
}
