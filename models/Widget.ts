export interface NewWidget {
  name: string
  price: number
  mfg: string
  inStock: number
}

export interface Widget extends NewWidget {
  id: number
}
