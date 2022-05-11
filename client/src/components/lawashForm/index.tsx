import { useEffect, useRef, useState } from 'react';
import { Button, MenuItem, TextField } from "@mui/material";
import { useMutation, useQueryClient } from 'react-query';
import { LawashService } from '../../services';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchIdLawash } from '../../hooks';

const styles = {
  lawashForm: {
    margin: '50px auto',
    width: '50%',
    backgroundColor: '#999999',
    padding: '30px 50px'
  },
  btn: {
    marginTop: '20px',
    color: '#000',
    '&:hover': {
      backgroundColor: '#dbdbdb',
    },
  },
}

const sizes = [
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

const initalValue = {
  date: '',
  image: {
    name: '',
    type: '',
    size: '',
    base64: '',
    file: '',
  },
  ingredients: '',
  isActive: '',
  price: '',
  size: '',
  title: '',
  _id: '',
}

export const LawashForm = ({data}: any) => {
  const imgRef = useRef() as any;
  const [formData, setFormData] = useState(data || initalValue);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation((formData: any) => {
    if(data) return LawashService.updateLawash(formData);
    return LawashService.createLawash(formData);
  })  
  
  const onLawashPage = () => navigate(`../lawash`);

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

  const hundleSubmit = (e: any) => {
    e.preventDefault();

    mutation.mutate(formData);
    onLawashPage();
  }

  return (
    <div style={styles.lawashForm}>
      <h3 
        style={{textAlign: 'center', margin: '20px 0 40px'}}
      >{data ? "Обновить Шаверму" : "Создать Шаверму"}</h3>

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
              Изменить
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
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
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
          {sizes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          sx={styles.btn}
          type="submit"
        >
          {data ? "Обновить" : "Создать"}
        </Button>
      </form>

    </div>
  )
}