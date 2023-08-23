import { addWidget } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

function AddWidget(props: Props) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const name = form.get('name')?.valueOf() as string
    const mfg = form.get('mfg')?.valueOf() as string
    const price = form.get('price')?.valueOf() as number
    const inStock = form.get('inStock')?.valueOf() as number

    const newWidget = {
      name,
      mfg,
      price,
      inStock,
    }

    await addWidget(newWidget)
    props.loadWidgets()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="mfg">mfg</label>
        <input type="text" id="mfg" name="mfg" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" />
      </div>
      <div>
        <label htmlFor="instock">In Stock</label>
        <input type="text" id="instock" name="inStock" />
      </div>
      <button>Add</button>
    </form>
  )
}

export default AddWidget
