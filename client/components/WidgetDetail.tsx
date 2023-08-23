import { Widget } from '../../models/Widget'

interface Props {
  widget: Widget
  handleDelete: (id: number) => void
}

function WidgetDetail(props: Props) {
  const { widget } = props
  return (
    <>
      <h2>{widget.name}</h2>
      <button
        onClick={() => {
          props.handleDelete(widget.id)
        }}
      >
        Delete
      </button>
    </>
  )
}

export default WidgetDetail
