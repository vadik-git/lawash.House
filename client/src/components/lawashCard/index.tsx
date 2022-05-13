import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { RiShoppingBasketLine } from 'react-icons/ri'
import { useMutation, useQueryClient } from 'react-query';

import { LAWASHES } from '../../consts';
import { LawashService } from '../../services';
import { LawashModal } from '../lawashModal';
import { IIngredient } from '../../types';
import { useCustomNavigation } from '../../hooks';

export const LawashCard = ({lawash, changeMode}: any) => {
  const [data, setData] = useState(lawash);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const { toUpdateLawashPage, toLawashesPage } = useCustomNavigation();

  const closeModal = () => setIsOpenModal(false);
  const fetchLawashRemove = (id: string) => LawashService.deleteLawash(id);
  
  const { mutateAsync } = useMutation(fetchLawashRemove);

  const handleRemove = async() => {
    await mutateAsync(lawash._id);
    queryClient.invalidateQueries(LAWASHES);
    toLawashesPage();
  };

  return (
    <Card style={styles.card}>
      <CardHeader
        title={data.title}
      />

      <CardMedia
        style={styles.cardMedia}
        component="img"
        image={data.image.base64}
        alt={data.title}
        sx={{borderRadius: '3px'}}
      />

      <CardContent sx={styles.cardContent}>
        <Typography 
          sx={styles.ingredients} 
          variant="body2" 
          color="text.secondary"
        >
          {data.ingredients.map((item: IIngredient) => item.isAdd && <Button 
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
          Price: {data.price}₴
        </Typography>

        <Typography 
          sx={styles.lawashInfo} 
          variant="body2" 
          color="text.secondary"
        >
          Size: {data.size}
        </Typography>
      </CardContent>

      <CardActions 
        disableSpacing 
        style={styles.cardAction}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {changeMode && <>
          <Button onClick={() => toUpdateLawashPage(lawash._id)}>Изменить</Button>
          <Button onClick={handleRemove}>Удалить</Button>
        </>}

        <Button 
          onClick={() => setIsOpenModal(prev => !prev)}
        >
          <RiShoppingBasketLine/>в корзину
        </Button>
      </CardActions>

      <LawashModal 
        mode={isOpenModal} 
        closeModal={closeModal} 
        lawash={lawash}
      />
    </Card>
  );
}

const styles = {
  card: { 
    width: '100%',
    minWidth: '20%',
    maxWidth: '30%',
    padding: '10px 30px',
    margin: '20px',
    backgroundColor: '#ffffff'
  },
  cardAction: {
    display:'flex', 
    justifyContent: 'space-between'
  },
  cardMedia: {
    width: '100%'
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