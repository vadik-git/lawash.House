import { useRef, useState } from 'react';
import { Button, MenuItem, TextField } from "@mui/material";
import { useMutation } from 'react-query';
import { LawashService } from '../../services';
import { useParams } from 'react-router-dom';
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

export const CreateLawashForm = () => {
  const params = useParams() as any;
  const { isLoading, isError, data } = useFetchIdLawash(params.id);
  
  const imgRef = useRef() as any;
  const [image, setImage] = useState('') as any;
  const [size, setSize] = useState('') as any;
  const [title, setTitle] = useState('') as any;
  const [ingredients, setIngredients] = useState('') as any;
  const [price, setPrice] = useState('') as any;
  
  const mutation = useMutation((formData: any) => {
    if(data) return LawashService.updateLawash(formData);
    return LawashService.createLawash(formData);
  })
  
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
      };
      setImage(fileInfo);
    }  
  }

  const hundleSubmit = () => {
    const obj = {
      title,
      price,
      image,
      ingredients,
      size,
      date: new Date().toISOString(),
      isActive: true,
    }

    mutation.mutate(obj);
  }

  if(isLoading) return (<p>Loading...</p>)  
  if(isError) return (<p>Что то пошло не так</p>)
 
  return (
    <div style={styles.lawashForm}>
      <h3 style={{textAlign: 'center'}}>Создать Шаверму</h3>

      <input 
        ref={imgRef}
        type="file" 
        style={{display: 'none'}} 
        onChange={(e: any) => imageBase64(e)} 
        accept="image/*"
      />
      {image || data 
        ? <>
            <img 
              src={image ? image.base64 : data.image.base64} 
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
        onSubmit={hundleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField 
          sx={{marginTop: 3}}
          required 
          label="Название" 
          value={title ? title : data ? data.title : ''}
          onChange={(e: any) => setTitle(e.target.value)}
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          value={ingredients ? ingredients : data ? data.ingredients : ''}
          onChange={(e: any) => setIngredients(e.target.value)}
          label="Ингредиенты"
          variant="standard"
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          value={price ? price : data ? data.price : ''}
          onChange={(e: any) => setPrice(e.target.value)}
          label="Цена" 
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          select
          required
          label="Размер"
          value={size ? size : data? data.size : ''}
          fullWidth
          onChange={(e: any) => setSize(e.target.value)}
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
          Создать
        </Button>
      </form>

    </div>
  )
}