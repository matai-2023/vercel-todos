import { addTodo } from '../apiClient'

interface Props {
  loadTodos: () => void
}

function AddTodo(props: Props) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const name = form.get('name')?.valueOf() as string
    const newTodo = {
      name,
    }

    await addTodo(newTodo)
    props.loadTodos()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <button>Add</button>
    </form>
  )
}

export default AddTodo
