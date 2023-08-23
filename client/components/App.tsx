import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { fetchWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  async function loadWidgets() {
    const data = await fetchWidgets()
    setWidgets(data)
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <h2>{widget.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
