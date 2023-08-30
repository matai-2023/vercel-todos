export interface NewTodo {
  name: string
}

export interface Todo extends NewTodo {
  id: number
}
