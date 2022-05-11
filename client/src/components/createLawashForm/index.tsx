import React, { useRef, useState } from 'react';
import { Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { LawashService } from '../../services';
import { useParams } from 'react-router-dom';

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
  const [img, setImg] = useState('') as any;
  const [size, setSize] = useState('S') as any;
  const imgRef = useRef() as any;
  const params = useParams();
  const mutation = useMutation((formData: any) => {
    return LawashService.createLawash(formData);
  })


  const handleChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
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
      };
      setImg(fileInfo);
    }  
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      ingredients: '',
    },
    onSubmit: values => {
      const obj = {
        title: values.title,
        date: new Date().toISOString(),
        isActive: true,
        price: values.price,
        image: img,
        ingredients: values.ingredients,
        size: size
      }

      mutation.mutate(obj);
    },
  });
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
      {img 
        ? <>
            <img 
              src={img.base64} 
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
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField 
          sx={{marginTop: 3}}
          required 
          label="Название" 
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          name="ingredients"
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          label="Ингредиенты"
          variant="standard"
        />
        <TextField
          sx={{marginTop: 3}}
          required 
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          label="Цена" 
          variant="standard" 
        />
        <TextField
          sx={{marginTop: 3}}
          select
          required
          label="Размер"
          value={size}
          fullWidth
          onChange={handleChangeSize}
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