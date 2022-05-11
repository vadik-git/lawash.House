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

export const sizesLawash = [
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

export const formInitalValue = {
  date: new Date().toISOString(),
  image: {
    name: '',
    type: '',
    size: '',
    base64: '',
    file: '',
  },
  ingredients: '',
  isActive: true,
  price: '',
  size: '',
  title: '',
};

export const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Ноябрь',
  'Декабрь',
];
  