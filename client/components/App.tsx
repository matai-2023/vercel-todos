import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import WidgetDetail from './WidgetDetail'
import { fetchWidgets, deleteWidget } from '../apiClient'
import AddWidget from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  async function loadWidgets() {
    const data = await fetchWidgets()

    // invalidate query
    setWidgets(data)
  }

  function handleDelete(id: number) {
    deleteWidget(id)
    loadWidgets()
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidget loadWidgets={loadWidgets} />
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <WidgetDetail widget={widget} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
