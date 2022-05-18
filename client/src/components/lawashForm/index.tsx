import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField } from "@mui/material";
import { useMutation, useQueryClient } from 'react-query';

import { 
  CREATE, 
  UPDATE, 
  CHANGE, 
  INITIAL_VALUE, 
  SIZES, 
  LAWASHES, 
  INGREDIENTS,
} from '../../consts';
import { LawashService } from '../../services';
import { useBase64 } from '../../hooks';
import { IImage, IIngredient, ILawash, IProps, ISize } from '../../types';
import { setLawashIngredient } from '../../utils/setLawashIngredient';
import { useCustomNavigation } from '../../hooks';
import placeholder from '../../assets/placeholder.jpeg'

export const LawashForm = ({data}: IProps) => {  
  const [formData, setFormData] = useState<ILawash>(data || INITIAL_VALUE);
  const queryClient = useQueryClient();
  const imgRef = useRef() as any;

  const { toLawashesPage } = useCustomNavigation();
  const { imageBase64 } = useBase64();

  useEffect(() => {
    if(!formData.ingredients.length) {
      const arr = [...formData.ingredients];

      Object.keys(INGREDIENTS).map((item: string) => arr.push({
        id: item, 
        name: INGREDIENTS[item as keyof typeof INGREDIENTS],
        isAdd: false,
      }))      
      setFormData({...formData, ingredients: [...arr]})
    }
  }, [formData]);

  const setImage = (image: IImage) => setFormData({...formData, image: {...image}});
  const create = (lawash: ILawash) => LawashService.createLawash(lawash);
  const edit = (lawash: ILawash) => LawashService.updateLawash(lawash);
  const { mutateAsync } = useMutation(data ? edit : create);

  const hundleSubmit = async(e: SyntheticEvent) => {
    e.preventDefault();
    
    await mutateAsync(formData);
    queryClient.invalidateQueries(LAWASHES);
    toLawashesPage();
  };
  
  const setIngredients = (e: SyntheticEvent) => {
    setFormData({...formData, ingredients: [...setLawashIngredient(e, formData)]});
  }
  
  return (
    <div style={styles.lawashForm}>
      <h3 style={styles.h3}>
        {data ? `${UPDATE} Шаверму` : `${CREATE} Шаверму`}
      </h3>

      <img 
        src={formData.image.base64 || placeholder} 
        alt="image_lawash" 
        width={200}
        style={{borderRadius: 3}}
      /> 
      
      <Button 
        sx={{...styles.btn, margin: '0 10px 27px'}}
        variant="text" 
        onClick={() => imgRef.current.click()}
      >
        {CHANGE}
      </Button>

      <form 
        onSubmit={(e: SyntheticEvent) => hundleSubmit(e)}
        style={styles.form}
      > 
        <input 
          ref={imgRef}
          type="file" 
          style={{display: 'none'}} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => imageBase64(e, setImage)} 
          accept="image/*"
        />
        <TextField 
          sx={{marginTop: 3}}
          required 
          label="Название" 
          value={formData.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: e.target.value})}
          variant="standard" 
        />
        
        <FormGroup style={{display: 'flex', flexDirection: 'row'}}>
          {formData.ingredients.map((item: IIngredient) => 
            <FormControlLabel 
              style={{width: '200px'}} 
              key={item.id + item.name} 
              label={item.name} 
              control={
                <Checkbox 
                  name={item.id}
                  id={item.id}
                  checked={item.isAdd}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIngredients(e)}
                />
              }
            />
          )}
        </FormGroup>

        <TextField
          sx={{marginTop: 3}}
          required 
          value={formData.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, price: e.target.value})}
          label="Цена" 
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          select
          required
          label="Размер"
          value={formData.size}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, size: e.target.value})}
          fullWidth
          variant="standard"
        >
          {SIZES.map((option: ISize) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          sx={styles.btn}
          type="submit"
        >
          {data ? UPDATE : CREATE}
        </Button>
      </form>
    </div>
  )
}

const styles = {
  lawashForm: {
    margin: '50px auto',
    width: '50%',
    backgroundColor: '#999999',
    padding: '30px 50px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  btn: {
    marginTop: '20px',
    color: '#000',
    '&:hover': {
      backgroundColor: '#dbdbdb',
    },
  },
  h3: {
    margin: '20px 0 40px'
  }
}