import { SyntheticEvent, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { MdKeyboardBackspace } from 'react-icons/md'

import { setLawashIngredient } from '../../utils/setLawashIngredient';
import { IIngredient } from '../../types';

//@ts-ignore
ReactModal.defaultStyles.overlay.backgroundColor = 'transparent';
//@ts-ignore
ReactModal.defaultStyles.overlay.backdropFilter = "blur(4px)";


export const LawashModal = ({mode, closeModal, lawash}: any) => {
  const [formData, setFormData] = useState(lawash);

  useEffect((): any => {
    if(mode) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'visible';
  })
  
  const setIngredients = (e: SyntheticEvent) => {
    setFormData({...formData, ingredients: [...setLawashIngredient(e, formData)]});
  }

  return (
    <Modal
      isOpen={mode}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <Button onClick={closeModal}><MdKeyboardBackspace size={30}/></Button>

      <div style={styles.main}>
        <Card style={styles.card}>

          <CardHeader
            title={lawash.title}
          />

          <CardMedia
            style={styles.cardMedia}
            component="img"
            image={lawash.image.base64}
            alt={lawash.title}
          />

          <CardContent sx={styles.cardContent}>
            <Typography 
              sx={styles.ingredients} 
              variant="body2" 
              color="text.secondary"
            >
              {lawash.ingredients.map((item: IIngredient) => item.isAdd && <Button 
                  disabled 
                  variant='outlined' 
                  sx={styles.ingredientItem}
              >{item.name}</Button>)}
            </Typography>

            <Typography 
              sx={styles.lawashInfo} 
              variant="body2" 
              color="text.secondary"
            >
              Price: {lawash.price}₴
            </Typography>

            <Typography 
              sx={styles.lawashInfo} 
              variant="body2" 
              color="text.secondary"
            >
              Size: {lawash.size}
            </Typography>
          </CardContent>

          <CardActions 
            disableSpacing 
            style={styles.cardAction}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card style={styles.moreIngredientBlock}>
          <CardHeader
            title="Дополнительные ингредиенты"
          />

          <FormGroup style={{display: 'flex', flexDirection: 'row'}}>
            {formData.ingredients.map((item: IIngredient) => 
              <FormControlLabel 
                style={{width: '150px'}} 
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
        </Card>
      </div>
      
      <Button style={styles.btn}>К оплате: {formData.price}₴</Button>
    </Modal>
  );
}

const customStyles = {
  content: {
    width: '85%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderColor: '#000'
  },
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: { 
    width: '100%',
    padding: '10px 30px',
    margin: '20px',
    backgroundColor: '#c6c6c6'
  },
  cardAction: {
    display:'flex', 
    justifyContent: 'space-between'
  },
  cardMedia: {
    width: '100%'
  },
  btn: {
    width: '250px',
    marginTop: '20px',
    marginLeft: 'calc(100% - 250px)',
    color: '#000',
    '&:hover': {
      backgroundColor: '#c3c3c3',
    },
  },
  moreIngredientBlock: {
    padding: '20px',
    marginLeft: '30px',
    boxShadow: 'none'
  },
  cardContent: {
    padding: '0 10px'
  },
  ingredients: {
    margin: '20px 0'
  },
  ingredientItem: {
    padding: '0 10px',
    marginTop: '5px',
    marginRight: '3px'
  },
  lawashInfo: {
    margin: '5px 0'
  }
}