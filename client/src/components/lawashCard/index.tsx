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
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { LAWASHES, LAWASH_PATH, UPDATE_PATH } from '../../consts';
import { LawashService } from '../../services';

export const LawashCard = ({lawash, changeMode}: any) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { 
    title, 
    price, 
    ingredients, 
    size, 
    image,
  } = lawash;

  const onUpdateLawashPage = () => navigate(`../${UPDATE_PATH}/${lawash._id}`);

  const fetchRemove = (id: string) => LawashService.deleteLawash(id);
  const { mutateAsync } = useMutation(fetchRemove);

  const handleRemove = async() => {
    await mutateAsync(lawash._id);
    queryClient.invalidateQueries(LAWASHES);
    navigate(`../${LAWASH_PATH}`);
  };

  return (
    <Card style={styles.card}>
      <CardHeader
        title={title}
      />

      <CardMedia
        style={styles.cardMedia}
        component="img"
        image={image.base64}
        alt={title}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}uah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {size}
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
          <Button onClick={onUpdateLawashPage}>Изменить</Button>
          <Button onClick={handleRemove}>Удалить</Button>
        </>}

        <Button>
          <RiShoppingBasketLine/>в корзину
        </Button>
      </CardActions>

    </Card>
  );
}

const styles = {
  card: { 
    maxWidth: '31%',
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
  }
}