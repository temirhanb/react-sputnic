export type TItem = {
  id: number,
  title: string,
  origin: string,
  price: {
    count: number, currency: string
  },
  image: string
}