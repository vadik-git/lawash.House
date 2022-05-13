import { ILawash } from "../types";

export const setLawashIngredient = (e: any, data: ILawash) => {
  let isEmpty = false;
  const isChecked = e.target.checked;
  
  const arr = [...data.ingredients];

  const result = arr.map(item => {
    if(item.id === e.target.name) {
      isEmpty = true;
      return item = {...item, isAdd: isChecked}
    } else return item;
  });
  
  if(!isEmpty) {
    result.push({
      id: e.target.name,
      name: e.target.id,
      isAdd: e.target.checked 
    })
  }
  
  return result;
}