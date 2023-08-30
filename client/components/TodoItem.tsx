import { Todo } from '../../types/Todo.ts'

interface Props {
  todo: Todo
  handleDelete: (id: number) => void
}

function TodoItem(props: Props) {
  const { todo } = props
  return (
    <>
      <h2>{todo.name}</h2>
      <button
        onClick={() => {
          props.handleDelete(todo.id)
        }}
      >
        Delete
      </button>
    </>
  )
}

export default TodoItem
