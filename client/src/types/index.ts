export interface ILawash {
  date: string,
  image: {
    name: string,
    type: string,
    size: string,
    base64: string,
    file: string,
  },
  ingredients: string,
  isActive: boolean,
  price: number,
  size: string,
  title: string,
  _id: string,
}