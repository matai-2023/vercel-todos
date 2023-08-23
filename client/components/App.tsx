import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { fetchWidgets, deleteWidget } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  async function loadWidgets() {
    const data = await fetchWidgets()
    setWidgets(data)
  }

  function handleDelete(id: number){
    deleteWidget(id)
    loadWidgets()
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <h2>{widget.name}</h2>
            <button onClick={() => {handleDelete(widget.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
