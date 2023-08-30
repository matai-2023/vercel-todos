import { useEffect, useState } from 'react'
import { Todo } from '../../types/Todo'
import TodoItem from './TodoItem'
import { fetchTodos, deleteTodo } from '../apiClient'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = useState([] as Todo[])

  useEffect(() => {
    loadTodos()
  }, [])

  async function loadTodos() {
    const data = await fetchTodos()

    // invalidate query
    setTodos(data)
  }

  function handleDelete(id: number) {
    deleteTodo(id)
    loadTodos()
  }

  return (
    <div>
      <h1>Todos</h1>
      <AddTodo loadTodos={loadTodos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
