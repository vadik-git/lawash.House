import { useRef, useState } from 'react';
import { Button, MenuItem, TextField } from "@mui/material";
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { ILawash } from '../../types';
import { 
  CREATE, 
  UPDATE, 
  CHANGE, 
  formInitalValue, 
  sizesLawash, 
  LAWASHES, 
  LAWASH_PATH,
} from '../../consts';
import { LawashService } from '../../services';

export const LawashForm = ({data}: any) => {
  const [formData, setFormData] = useState<ILawash>(data || formInitalValue);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const imgRef = useRef() as any;

  const create = (lawash: ILawash) => LawashService.createLawash(lawash);
  const edit = (lawash: ILawash) => LawashService.updateLawash(lawash);

  const { mutateAsync } = useMutation(data ? edit : create);

  const hundleSubmit = async(e: any) => {
    e.preventDefault();

    await mutateAsync(formData);
    queryClient.invalidateQueries(LAWASHES);
    navigate(`../${LAWASH_PATH}`);
  };

  const imageBase64 = (e: any) => {
    const file = e.target.files[0];  

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result,
        file: file,
      } as any;
      setFormData({...formData, image: {...fileInfo}});
    }  
  }

  return (
    <div style={styles.lawashForm}>
      <h3 
        style={styles.h3}
      >{data ? `${UPDATE} Шаверму` : `${CREATE} Шаверму`}</h3>

      <input 
        ref={imgRef}
        type="file" 
        style={{display: 'none'}} 
        onChange={(e: any) => imageBase64(e)} 
        accept="image/*"
      />
      {formData.image.base64
        ? <>
            <img 
              src={formData.image.base64} 
              alt="image_lawash" 
              width={200}
            /> 
            <Button 
              variant="text" 
              onClick={() => imgRef.current.click()}
            >
              {CHANGE}
            </Button>
          </>
        : <Button 
            variant="text" 
            onClick={() => imgRef.current.click()}
          >
            Добавить изображение
          </Button>
        }

      <form 
        onSubmit={(e: any) => hundleSubmit(e)}
        style={styles.form}
      >
        <TextField 
          sx={{marginTop: 3}}
          required 
          label="Название" 
          value={formData.title}
          onChange={(e: any) => setFormData({...formData, title: e.target.value})}
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          value={formData.ingredients}
          onChange={(e: any) => setFormData({...formData, ingredients: e.target.value})}
          label="Ингредиенты"
          variant="standard"
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          value={formData.price}
          onChange={(e: any) => setFormData({...formData, price: e.target.value})}
          label="Цена" 
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          select
          required
          label="Размер"
          value={formData.size}
          onChange={(e: any) => setFormData({...formData, size: e.target.value})}
          fullWidth
          variant="standard"
        >
          {sizesLawash.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
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