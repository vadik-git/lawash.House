export const validationErrorMessage = (type: string = 'string', label: string, minimumCharacters: number = 1) => {
  let res = {};

  switch(type) {
    case 'string' : {
      res = {
        'string.base': `[${label}] should be a type of '${type}'`,
        'string.empty': `[${label}] cannot be an empty field`,
        'string.min': `[${label}] should have a minimum length of {${minimumCharacters}}`,
        'any.required': `[${label}] is a required field`
      }
      break;
    }
    case 'number' : {
      res = {
        'number.base': `[${label}] should be a type of '${type}'`,
        'number.empty': `[${label}] cannot be an empty field`,
        'number.positive': `[${label}] must be a positive number`,
        'any.required': `[${label}] is a required field`
      }
      break;
    }
    case 'date' : {
      res = {
        'date.base': `[${label}] should be a type of '${type}'`,
        'any.required': `[${label}] is a required field`
      }
      break;
    }
    case 'boolean' : {
      res = {
        'boolean.base': `[${label}] must be a boolean`,
      }
      break;
    }
  };

  return res;
}