import { IIngredients, ILawash } from "../types";

export const API_URL = 'http://localhost:5000';

// CONSTS =============>

export const LAWASH_PATH = 'lawash';
export const CREATE_PATH = 'createLawash';
export const UPDATE_PATH = 'update';
export const BASKET_PATH = 'basket';
export const SIGNIN_PATH = 'signIn';

// NAMES =============>

export const LAWASHES = 'lawashes';
export const UPDATE = 'Обновить';
export const CREATE = 'Создать';
export const DELETE = 'Удалить';
export const CHANGE = 'Изменить';

// VALUES =============>

export const SIZES = [
  {
    value: 'S',
    label: 'Small',
  },
  {
    value: 'M',
    label: 'Medium',
  },
  {
    value: 'L',
    label: 'Large',
  },
  {
    value: 'XL',
    label: 'Extra large',
  },
];

export const INITIAL_VALUE: ILawash = {
  date: new Date().toISOString(),
  image: {
    name: '',
    type: '',
    size: '',
    base64: '',
    file: '',
  },
  ingredients: [],
  isActive: true,
  price: '',
  size: 'S',
  title: '',
};

export const INGREDIENTS:IIngredients = {
  lawash: "Лаваш армянский",
  tomato: "Свежий помидор",
  cucumber: "Огурец",
  cabbage: "Капуста",
  cheese: "Сыр",
  carrot: "Корейская морква",
  saltCucumber: "Соленые огурцы",
  mushrooms: "Грибы",
  chicken: "Куриное филе",
  pork: "Свинина",
  beef: "Говядина",
  onion: "Лук репчатый",
  dill: "Укроп свежый",
  blackPaper: "Перец черный",
  sausage: "Колбаса",
  ketchup: "Кетчуп",
  mayonnaise: "Майонез",
  saumon: "Лосось",
  chips: "Картошка фри",
  mint: "Мята",
  chilli: "Перец чили",
  bellPepper: "Болгарский перец",
  garlicSauce: "Соус чесночный",
};