export interface ILawash {
  date: string,
  image: IImage,
  ingredients: any[],
  isActive: boolean,
  price: number | string,
  size: string,
  title: string,
  _id?: string,
}

export interface IIngredients {
  lawash: string,
  tomato: string,
  cucumber: string,
  cabbage: string,
  cheese: string,
  carrot: string,
  saltCucumber: string,
  mushrooms: string,
  chicken: string,
  pork: string,
  beef: string,
  onion: string,
  dill: string,
  blackPaper: string,
  sausage: string,
  ketchup: string,
  mayonnaise: string,
  saumon: string,
  chips: string,
  mint: string,
  chilli: string,
  bellPepper: string,
  garlicSauce: string,
}

export interface IIngredient {
  id: string,
  name: string,
  isAdd: boolean,
}

export interface IProps {
  data?: ILawash | null,
  lawash?: ILawash | null,
  mode?: boolean | null,
  closeModal?: any
}

export interface IImage {
  base64: string,
  file: {},
  name: string,
  size: string,
  type: string,
}

export interface ISize {
  value: string,
  label: string
}
